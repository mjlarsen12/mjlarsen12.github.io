/*
Add Hymn of the Day records inside this array. One record may contain several
date rules, and several records may match the same day.

Example:
{
  title:'Example Hymn',
  text:'First line of the hymn\nSecond line of the hymn',
  credit:'Author Name, year; Translator Name, year',
  recommendedTune:'KING’S LYNN',
  reflection:'Your reflection goes here.',
  tags:['Advent','Incarnation'],
  dates:[
    {type:'fixed',month:12,day:25},
    {type:'easterOffset',days:0},
    {type:'weekdayAfterFixed',month:9,day:14,weekday:3},
    {type:'weekdayOnOrAfterFixed',month:1,day:2,weekday:0},
    {type:'nthWeekday',month:11,weekday:4,occurrence:4},
    {type:'exact',date:'2026-12-25'}
  ]
}
*/
window.hymnOfTheDayEntries=[];
