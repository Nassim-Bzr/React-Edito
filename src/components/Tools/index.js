import { useDispatch } from 'react-redux';
import './style.scss';

function Tools() {
  const dispatch = useDispatch();
  return (
    <footer className="tools">
      Taille du texte :
      <button

        type="button"
        onClick={() => {
          dispatch({
            type: 'CHANGE_ISSMALL',
            payload: true,
          });
        }}
      >
        Petit
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: 'CHANGE_ISSMALL',
            payload: false,
          });
        }}
      >Grand
      </button>
    </footer>
  );
}

export default Tools;
