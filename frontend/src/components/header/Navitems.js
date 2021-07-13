import routes from '../../routes/routes';

function Navitems() {
    return <li>{routes.map((label) => label.Page)}</li>;
}
export default Navitems;
