import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import { loadProperties } from "../../redux/actions/load_properties";
import Page from "../../styled-components/Page";
import { t } from "../../i18n/translate";

function Home() {
  const [selected, setSelected] = useState(null);
  const [all, setAll] = useState(false);
  const [parking, setParking] = useState(false);
  const [price, setPrice] = useState(5000);
  const [building, setBuilding] = useState("Residential");
  const { list, types } = useSelector((state) => state.properties);
  const dispatch = useDispatch();

  const [viewport, setViewport] = useState({
    latitude: 47.38,
    longitude: 8.54,
    width: "100%",
    height: "100%",
    zoom: 12,
  });

  useEffect(() => {
    dispatch(loadProperties());
  }, [dispatch]);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  const ShowMarkers = ({ place, id }) => {
    return (
      <Marker key={id} latitude={place.latitude} longitude={place.longitude}>
        <div
          onClick={(e) => {
            e.preventDefault();
            setSelected(place);
          }}
        >
          <img src="./icons/pin.svg" alt="pin" className="pointer__style" />
        </div>
      </Marker>
    );
  };

  const ShowPopup = ({ selected }) => {
    return (
      <Popup
        latitude={selected.latitude}
        longitude={selected.longitude}
        onClose={() => setSelected(null)}
      >
        <div className="text_size">
          <div className="title">Property Details</div>
          <div className="type">{selected.BuildingType} building</div>
          <div className="price">Price (&#13217;): {selected.Price} CHF</div>
          <div className="parking">
            Parking {selected.Parking ? " available" : " not available"}
          </div>
        </div>
      </Popup>
    );
  };

  const filteredList = all
    ? list
    : list.filter(
        (item) =>
          item.Parking === parking &&
          item.Price <= price &&
          item.BuildingType === building
      );

  return (
    <Page>
      <div className="filter__bar">
        <h3>{t("search_title")}</h3>
        <div className="parking_layout">
          <label htmlFor="parking">{t("parking")}</label>
          <input
            type="checkbox"
            name="parking"
            id="parking"
            onChange={(e) => setParking(e.target.checked)}
            disabled={all}
          />
        </div>
        <div className="form_dropdown">
          <label htmlFor="price">{t("price_range")}</label>
          <select
            name="price"
            id="price"
            onChange={(e) => setPrice(parseInt(e.target.value))}
            disabled={all}
          >
            <option value="1500">Less than 1500</option>
            <option value="2000">Less than 2000</option>
            <option value="3000">Less than 3000</option>
            <option value="5000" defaultValue>
              Less than 5000
            </option>
          </select>
        </div>
        <div className="form_dropdown">
          <label htmlFor="building">{t("building")}</label>
          <select
            name="building"
            id="building"
            onChange={(e) => setBuilding(e.target.value)}
            disabled={all}
          >
            {types &&
              types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
          </select>
        </div>
        <div className="parking_layout all_records">
          <label htmlFor="all">{t("all")}</label>
          <input
            type="checkbox"
            name="all"
            id="all"
            onChange={(e) => setAll(e.target.checked)}
          />
        </div>
      </div>

      <ReactMapGl
        {...viewport}
        maxZoom={20}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(newViewport) => setViewport({ ...newViewport })}
      >
        {filteredList &&
          filteredList.map((place) => (
            <ShowMarkers place={place} key={place.ID} />
          ))}
        {selected && <ShowPopup selected={selected} />}
      </ReactMapGl>
    </Page>
  );
}

export default Home;
