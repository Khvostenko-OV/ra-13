export default function getInfo(url, attr, setState) {
  fetch(url)
  .then(resp => resp.json())
  .then(json => setState(prev => ({...prev, [attr]: json})))
  .catch(error => console.log('Server error:', error));
}
