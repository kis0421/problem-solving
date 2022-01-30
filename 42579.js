//  베스트앨범

function solution(genres, plays) {
  const albumMap = {};
  const bestAlbum = [];

  genres.forEach((genre, genreIndex) => {
    if (albumMap[genre] === undefined) {
      albumMap[genre] = { total: 0, genre: [] };
    }
    albumMap[genre].total += plays[genreIndex];
    albumMap[genre].genre.push({
      index: genreIndex,
      count: plays[genreIndex],
    });
  });
  const sortAlbum = Array.from(Object.entries(albumMap))
    .sort((a, b) => b[1].total - a[1].total);
  for (const album of sortAlbum) {
    const bestAlbumIndexes = album[1].genre.sort((a, b) => b.count - a.count)
      .slice(0, 2)
      .map((info) => info.index);
    bestAlbum.push(...bestAlbumIndexes);
  }
  return bestAlbum;
}
