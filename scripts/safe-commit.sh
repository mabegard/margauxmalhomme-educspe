#!/usr/bin/env bash
# Contournement : `git commit` peut rester bloqué sur ce poste (écriture index).
# Usage : npm run commit:safe -- "Message du commit"
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 \"Message du commit\"" >&2
  exit 1
fi

MSG="$*"
BRANCH="$(git branch --show-current)"

if [[ -z "$(git diff --cached --name-only)" ]]; then
  echo "Rien en staging. Faites d'abord : git add …" >&2
  exit 1
fi

TREE="$(git write-tree)"
PARENT="$(git rev-parse HEAD)"
COMMIT="$(git commit-tree "$TREE" -p "$PARENT" -m "$MSG")"
git update-ref "refs/heads/${BRANCH}" "$COMMIT"
git reset HEAD >/dev/null

echo "Commit créé : ${COMMIT:0:7} sur ${BRANCH}"
