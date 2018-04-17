export const computedTrack = (route) => {
  let path = '';
  let crumbs = [];
  let track = route.split('/'); // got an array

  for(let i = 0; i < track.length; i++) {
    let name = track[i];
    let crumbName = name + '/';

    if (track[i] == '') {
      continue;
    }

    path += '/' + name;
    crumbs.push({ path: path, name: crumbName });
  }

  return crumbs;
  
};