# Religious Art Gallery Instructions

Upload `app.js` to the root of the GitHub repository, replacing the existing file. Keep `religious-art.csv` as your editable master list.

## Add a photograph

Upload the image to the `religious-art` folder. Use a short lowercase `.jpg` filename, such as `spc-nativity.jpg`.

Add one row to `religious-art.csv`. The `filename` cell contains only the base filename, such as `spc-nativity`, without the folder or `.jpg` extension. Separate multiple seasons, figures, or tags with semicolons.

Run `python generate_religious_art.py` in the folder containing the CSV, script, and `app.js`. The script rebuilds the complete gallery data block in `app.js`. Upload the regenerated `app.js` to GitHub.

The generated record will resemble:

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
    image: 'religious-art/spc-nativity.jpg',
  alt: 'Stained-glass window depicting the Nativity at St. Peter Claver'
},
```

The gallery order follows the row order in `religious-art.csv`.

## Field meanings

- `title`: displayed name of the artwork.
- `church`: full, consistently written church name used by the filter.
- `churchCode`: searchable abbreviation; it is not displayed as a separate tag.
- `location`: city and state.
- `season`: associated liturgical season or seasons, if applicable.
- `figures`: people or saints depicted.
- `tags`: additional searchable ideas that do not fit the structured fields.
- `type`: medium, such as `Stained glass`, `Mosaic`, `Statue`, or `Painting`.
- `image`: generated from the filename column and `religious-art` folder.
- `alt`: concise visual description for accessibility.

You do not need to edit the filter menus. Church, Topic, Season, Figure or Saint, and Artwork Type are built automatically from the CSV records.
