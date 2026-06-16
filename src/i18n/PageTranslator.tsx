"use client";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "./TranslationProvider";

const GOOGLE_TRANSLATE_ENDPOINT =
  "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&oe=UTF-8";

const buildTextNodes = (root: HTMLElement): Text[] => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (
        parent.closest("[data-no-translate]") ||
        parent.tagName === "SCRIPT" ||
        parent.tagName === "STYLE" ||
        parent.tagName === "TEXTAREA" ||
        parent.tagName === "INPUT" ||
        parent.tagName === "OPTION"
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      const text = node.nodeValue?.trim();
      if (!text) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode as Text);
  }
  return nodes;
};

const translateString = async (text: string, target: string) => {
  if (!text || !target) return text;
  if (target === "en") return text;

  const cacheKey = `translate_${target}_${text}`;
  const cached = sessionStorage.getItem(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(
      `${GOOGLE_TRANSLATE_ENDPOINT}&sl=auto&tl=${encodeURIComponent(target)}&q=${encodeURIComponent(text)}`,
    );
    if (!response.ok) throw new Error("Translation fetch failed");
    const data = await response.json();
    const translated =
      data.sentences?.map((segment: any) => segment.trans).join("") ?? text;
    sessionStorage.setItem(cacheKey, translated);
    return translated;
  } catch (error) {
    console.warn("Translation failed:", error);
    return text;
  }
};

const chunkTexts = (texts: string[], size: number) => {
  const chunks: string[][] = [];
  for (let i = 0; i < texts.length; i += size) {
    chunks.push(texts.slice(i, i + size));
  }
  return chunks;
};

const PageTranslator = () => {
  const { locale } = useTranslation();
  const location = useLocation();
  const originalTextMap = useRef(new WeakMap<Text, string>());
  const latestLocale = useRef(locale);

  useEffect(() => {
    latestLocale.current = locale;
  }, [locale]);

  useEffect(() => {
    const root = document.body;
    if (!root) return;

    const nodes = buildTextNodes(root);
    if (!nodes.length) return;

    for (const node of nodes) {
      if (!originalTextMap.current.has(node)) {
        originalTextMap.current.set(node, node.nodeValue ?? "");
      }
    }

    const originalTexts = nodes.map(
      (node) => originalTextMap.current.get(node) ?? "",
    );
    const uniqueTexts = Array.from(new Set(originalTexts)).filter(Boolean);

    const translateAll = async () => {
      if (locale === "en") {
        nodes.forEach((node) => {
          const original = originalTextMap.current.get(node);
          if (original !== undefined) node.nodeValue = original;
        });
        return;
      }

      const batches = chunkTexts(uniqueTexts, 10);
      const translationMap = new Map<string, string>();

      for (const batch of batches) {
        const joined = batch.join("\n\n");
        const translatedJoined = await translateString(joined, locale);
        const translatedParts = translatedJoined.split("\n\n");
        if (translatedParts.length === batch.length) {
          batch.forEach((text, index) => {
            translationMap.set(text, translatedParts[index]);
          });
        } else {
          batch.forEach((text) => translationMap.set(text, text));
        }
      }

      nodes.forEach((node) => {
        const original =
          originalTextMap.current.get(node) ?? node.nodeValue ?? "";
        node.nodeValue = translationMap.get(original) ?? original;
      });
    };

    translateAll();
  }, [locale, location.pathname]);

  return null;
};

export default PageTranslator;
