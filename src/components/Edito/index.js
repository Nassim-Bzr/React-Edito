import { useSelector } from 'react-redux';
import Title from '../Title';
import Main from '../Main';
import Content from '../Content';
import './style.scss';

function Edito() {
  const isSmall = useSelector((state) => state.isSmall);
  return (
    <div className={isSmall ? 'edito' : 'edito edito-grand'}>
      <Title text="Edito" />
      <Main>
        <Content />
      </Main>
    </div>
  );
}

export default Edito;
