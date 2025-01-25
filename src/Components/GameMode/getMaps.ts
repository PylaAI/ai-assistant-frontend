export const getMaps = async () => {
  try {
    const res = await fetch('https://pylaaibrawlstars.pythonanywhere.com/maps');
    if (!res.ok) throw Error('Error');
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
