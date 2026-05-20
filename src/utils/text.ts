/**
 * Text-layout helpers.
 */

/** Non-breaking space character (U+00A0). Visually identical to a normal
 *  space but the browser will not use it as a line-break opportunity. */
const NBSP = " ";

/**
 * Compose a sentence whose only allowed line-break opportunities are
 * **between** the provided segments. Spaces inside each segment become
 * non-breaking spaces, so the browser only ever wraps where the author
 * inserted a segment boundary.
 *
 * Usage in dictionary strings:
 *
 *   phrase(
 *     "우리 회사에 맞는 AI 사용 방식 구성과 과금 정책을",
 *     "함께 고민해 드립니다."
 *   )
 *
 * On wide viewports the sentence stays on one line. As the container
 * narrows, the browser breaks at the first available segment boundary,
 * then the next, etc. A single-segment call (or a plain string literal)
 * leaves the text alone — natural word wrapping applies.
 *
 * Works in conjunction with the global `word-break: keep-all` rule:
 * Korean words can never split mid-character, and non-segment spaces
 * (now NBSPs) can never split either, so the only legal break points
 * are the ones the author authored.
 */
export function phrase(...segments: string[]): string {
  if (segments.length <= 1) {
    return segments[0] ?? "";
  }
  return segments.map((segment) => segment.replace(/ /g, NBSP)).join(" ");
}
