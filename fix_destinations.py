import re

content = open('app/destinations/page.tsx', encoding='utf-8').read()

content = content.replace('key={trip.id}', 'key={trip._id}')
content = content.replace('key={trip.id}', 'key={trip._id}')
content = re.sub(r'trip\.id\b', 'trip._id', content)
content = re.sub(r'trip\.image\b', 'trip.images[0]', content)

open('app/destinations/page.tsx', 'w', encoding='utf-8').write(content)
print('Done')
