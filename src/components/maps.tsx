import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const BlaBlaMap = () => {
const mapData = {
   center: [55.798682, 37.695816], zoom: 11,
};
const coordinates = [
  [55.798682, 37.695816]
];
return (
  <YMaps>
    <div>Bla Bla Company Москва, Колодезный переулок д.2а
	 <Map defaultState={mapData}>{coordinates.map(coordinate => <Placemark geometry={coordinate} />)}</Map></div>
  </YMaps>
);

}