import Title from '../Title';
import Main from '../Main';
import Content from '../Content';
import './style.scss';

function Edito() {
  return (
    <div className="edito">
      <Title text="Edito" />
      <Main>
        <Content />
      </Main>
    </div>
  );
}

export default Edito;
