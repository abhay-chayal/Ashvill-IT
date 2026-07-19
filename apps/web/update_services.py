import re

def fix():
    file_path = 'd:/Internship Projects/Ashwil trial/apps/web/src/content/services.ts'
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove the erroneous image lines at the end of createService calls
    # Pattern: \n    'https://images.unsplash.com...',\n  ),
    content = re.sub(r"\n\s+'https://images\.unsplash\.com[^']+',\n\s+\),", "\n  ),", content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    fix()
