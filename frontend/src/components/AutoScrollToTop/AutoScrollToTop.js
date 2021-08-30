import { BsArrowUpShort } from 'react-icons/bs';

function AutoScrollToTop() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <div className="scrollUp_Box" onClick={scrollTop}>
      <BsArrowUpShort size="50px" color="#FFF" />
    </div>
  );
}

export default AutoScrollToTop;
