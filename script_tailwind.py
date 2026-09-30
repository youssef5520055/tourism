import sys

with open('tailwind.config.ts', 'r', encoding='utf-8') as f:
    content = f.read()

font_injection = '''
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
'''

content = content.replace('extend: {', 'extend: {' + font_injection)

with open('tailwind.config.ts', 'w', encoding='utf-8') as f:
    f.write(content)
