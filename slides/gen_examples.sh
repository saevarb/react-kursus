#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'


cd src/examples

for file in *.original.jsx; do
    new=$(echo "$file" | sed 's/original.jsx/example/')
    cp "$file" "$new"
done
