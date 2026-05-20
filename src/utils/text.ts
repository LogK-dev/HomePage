/**
 * Text-layout helpers.
 */

/**
 * Marker character used in dictionary strings to point at the preferred
 * line-break opportunity for a sentence. Place it immediately after the
 * space you'd like the browser to break at, e.g.:
 *
 *   "...정책을 ​함께 고민해 드립니다."
 *
 * The marker itself is a zero-width space — invisible in rendered output
 * and unobtrusive in source. Other text rendering remains untouched if
 * the marker is absent (the helper returns the string as-is).
 */
export const PREFERRED_BREAK_MARKER = "​";

/**
 * Transform a string so the browser is only *allowed* to wrap at the
 * preferred break points marked by `PREFERRED_BREAK_MARKER`.
 *
 * Mechanism:
 *   1. Split on the pattern " ​" (space + ZWSP) — those positions
 *      become the only regular spaces in the output.
 *   2. Within each segment, every remaining space is replaced with a
 *      non-breaking space ( ) — the browser can't wrap there.
 *   3. The segments are rejoined with a single regular space.
 *
 * Effect: a sentence stays on one line whenever the container is wide
 * enough; the browser only wraps at marked positions when it has to.
 *
 * If the string contains no marker the input is returned unchanged.
 */
export function preferBreakAt(text: string): string {
  if (!text.includes(PREFERRED_BREAK_MARKER)) return text;
  return text
    .split(` ${PREFERRED_BREAK_MARKER}`)
    .map((segment) => segment.replace(/ /g, " "))
    .join(" ");
}
