import { useState } from "react";
import checkIsMobile from "../../../utils/checkIsMobile";
import { useDispatch } from "react-redux";
import { setSongStatusState } from "../../../reducers/statusReducer";
import { useDropdownState } from "../../../hooks/useDropdownState";

export default function SongFilter() {
  const [dropdownOpen, toggleDropdown] = useDropdownState(false);
  const [selectedStatus, setSelectedStatus] = useState<boolean | null>(null);

  const isMobile = checkIsMobile();

  const dispatch = useDispatch();

  const handleStatusSelect = (songStatus: boolean | null) => {
    dispatch(setSongStatusState(songStatus));
    setSelectedStatus(songStatus);
    toggleDropdown();
  };

  return (
    <>
      <div
        className={`dropdown ${isMobile ? "" : "is-right"} ${
          dropdownOpen ? "is-active" : ""
        }`}
      >
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={toggleDropdown}
          >
            <span>
              {selectedStatus === null
                ? "Filter by Song Status"
                : selectedStatus
                ? "Played"
                : "Not Played Yet"}
            </span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a
                href="#"
                className={`dropdown-item ${
                  selectedStatus === null ? "is-active" : ""
                }`}
                onClick={() => handleStatusSelect(null)}
              >
                All Songs
              </a>
              <a
                href="#"
                className={`dropdown-item ${
                  selectedStatus === true ? "is-active" : ""
                }`}
                onClick={() => handleStatusSelect(true)}
              >
                Played
              </a>
              <a
                href="#"
                className={`dropdown-item ${
                  selectedStatus === false ? "is-active" : ""
                }`}
                onClick={() => handleStatusSelect(false)}
              >
                Not Played Yet
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
