import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./assets/redux/store/store";
import MyNavbar from "./assets/components/MyNavbar";
import News from "./assets/components/News";
import RowEpisodes from "./assets/components/RowEpisodes";
import NewReleases from "./assets/components/NewReleases";
import MyFooter from "./assets/components/MyFooter";
import Explore from "./assets/components/Explore";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./assets/components/Sidebar";
import MobilePlayer from "./assets/components/MobilePlayer";
import DesktopPlayer from "./assets/components/DesktopPlayer";

function App() {
  return (
    <div className=" d-flex flex-column min-vh-100">
      <Provider store={store}>
        <MyNavbar />
        <main className="px-4 flex-grow-1 overflow-x-hidden">
          <Row>
            <Col xs={0} lg={2}>
              <Sidebar />
            </Col>
            <Col xs={12} md={12} lg={10} className="px-0">
              <DesktopPlayer />
              <News />
              <RowEpisodes />
              <NewReleases />
              <Explore />
              <MyFooter />
            </Col>
          </Row>
          <MobilePlayer />
        </main>
      </Provider>
    </div>
  );
}

export default App;
