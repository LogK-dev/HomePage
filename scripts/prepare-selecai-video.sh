#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "Usage: $0 INPUT_VIDEO OUTPUT_NAME" >&2
  echo "Example: $0 ~/Movies/model-comparison.mov selecAI_multi_delegate" >&2
  exit 2
fi

input=$1
name=$2
if [[ ! -f $input ]]; then
  echo "Input video not found: $input" >&2
  exit 1
fi
if [[ ! $name =~ ^[A-Za-z0-9_-]+$ ]]; then
  echo "OUTPUT_NAME must contain only letters, digits, underscores, or hyphens" >&2
  exit 2
fi
if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required to prepare video assets" >&2
  exit 1
fi

repo_root=$(cd "$(dirname "$0")/.." && pwd)
output_dir="$repo_root/public/assets/selecAI_mockup"
mkdir -p "$output_dir"

# Short, silent H.264 MP4 clips play reliably across browsers. Keep the source
# recording outside public/ so an unedited capture is never deployed by mistake.
ffmpeg -hide_banner -loglevel error -y -i "$input" \
  -an -vf "fps=30,scale='min(1600,iw)':-2" \
  -c:v libx264 -preset medium -crf 23 -pix_fmt yuv420p \
  -movflags +faststart "$output_dir/$name.mp4"

# A still frame appears before autoplay starts and when autoplay is unavailable.
ffmpeg -hide_banner -loglevel error -y -ss 0.5 -i "$output_dir/$name.mp4" \
  -frames:v 1 -q:v 3 "$output_dir/$name-poster.jpg"

printf 'Created %s and %s\n' "$output_dir/$name.mp4" "$output_dir/$name-poster.jpg"
