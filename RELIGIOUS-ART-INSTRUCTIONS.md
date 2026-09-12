# Religious Art Gallery Instructions

Upload `app.js` and `style.css` to the root of the GitHub repository, replacing the existing files.

## Add a photograph

Upload the image itself to the repository root. Use a short lowercase filename, such as `spc-nativity.jpg`.

In `app.js`, find `const religiousArt=[` and add a record before the closing `];`:

```js
{
  title: 'The Nativity',
  church: 'St. Peter Claver',
  churchCode: 'SPC',
  location: 'Sheboygan, Wisconsin',
  subject: 'Nativity',
  season: 'Christmas',
  figures: ['Christ', 'Blessed Virgin Mary', 'St. Joseph'],
  tags: ['Bethlehem', 'Incarnation'],
  type: 'Stained glass',
  image: 'spc-nativity.jpg',
  alt: 'Stained-glass window depicting the Nativity at St. Peter Claver'
},
```

The gallery order follows the order of records in `religiousArt`.

## Field meanings

- `title`: displayed name of the artwork.
- `church`: full, consistently written church name used by the filter.
- `churchCode`: searchable abbreviation; it is not displayed as a separate tag.
- `location`: city and state.
- `subject`: principal event or theme.
- `season`: associated liturgical season, if applicable.
- `figures`: people or saints depicted.
- `tags`: additional searchable ideas that do not fit the structured fields.
- `type`: medium, such as `Stained glass`, `Mosaic`, `Statue`, or `Painting`.
- `image`: exact image filename in the repository root.
- `alt`: concise visual description for accessibility.

You do not need to edit the filter menus. They are built automatically from these records.
