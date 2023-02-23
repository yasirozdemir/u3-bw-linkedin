import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/CustomFooter.css";

const CustomFooter = () => {
  return (
    <footer className="mt-5 pb-4">
      <Container>
        <Row className="px-3 mb-3">
          <svg
            viewBox="0 0 84 21"
            width="84"
            height="21"
            style={{ fill: "#0A66C2" }}
          >
            <g>
              <g>
                <path d="M12.5 2.75a1.75 1.75 0 101.8 1.75 1.75 1.75 0 00-1.8-1.75zM11 8h3v10h-3zM22.34 7.76A4.06 4.06 0 0019 9.39V8h-3v10h3v-5a2.31 2.31 0 012.16-2.48c1.1 0 1.84.82 1.84 2.44V18h3v-6.25c0-3.06-1.89-3.99-3.66-3.99zM82.5 0h-18A1.5 1.5 0 0063 1.5v18a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0082.5 0zM69 18h-3V8h3zM67.5 6.25a1.75 1.75 0 111.8-1.75 1.75 1.75 0 01-1.8 1.75zM81 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.31 2.31 0 0074 13v5h-3V8h3v1.39a4.06 4.06 0 013.3-1.63c1.77 0 3.66.93 3.66 4zM3 3H0v15h9v-3H3V3zM57 9a4.23 4.23 0 00-3.17-1.3A4.9 4.9 0 0049 12.94a5 5 0 004.87 5.36 3.78 3.78 0 003.31-1.61V18H60V3h-3zm-2.54 6.8A2.57 2.57 0 0151.9 13a2.55 2.55 0 012.56-2.8A2.63 2.63 0 0157.1 13a2.6 2.6 0 01-2.64 2.8zM38.04 8H34.4l-3.34 4.04H31V3h-3v15h3v-4.81h.06L34.48 18h3.75l-4.06-5.5L38.04 8z"></path>
                <path d="M43.13 7.7A5 5 0 0038 12.87a5.11 5.11 0 005.24 5.43 5.5 5.5 0 004.39-1.94l-1.93-1.3a3.28 3.28 0 01-2.4 1 2.24 2.24 0 01-2.38-2V14h7v-.77C48 9.52 45.85 7.7 43.13 7.7zm-2.2 4.3a2.16 2.16 0 012.21-2.1 2 2 0 012 2.1z"></path>
              </g>
            </g>
          </svg>
        </Row>
        <Row className="mb-2">
          <Col className="d-flex align-items-start">
            <div
              className="d-flex flex-column"
              style={{ width: "33%", fontSize: "0.8rem" }}
            >
              <Link to="/" className="mb-2">
                About
              </Link>
              <Link to="/" className="mb-2">
                Community Guidelines
              </Link>
              <Link to="/" className="mb-2">
                Privacy & Terms
              </Link>
              <Link to="/" className="mb-2">
                Sales Solutions
              </Link>
              <Link to="/" className="mb-2">
                Safety Center
              </Link>
            </div>
            <div
              className="d-flex flex-column"
              style={{ width: "33%", fontSize: "0.8rem" }}
            >
              <Link to="/" className="mb-2">
                Accesbility
              </Link>
              <Link to="/" className="mb-2">
                Careers
              </Link>
              <Link to="/" className="mb-2">
                Ad Choices
              </Link>
              <Link to="/" className="mb-2">
                Mobile
              </Link>
            </div>
            <div
              className="d-flex flex-column"
              style={{ width: "33%", fontSize: "0.8rem" }}
            >
              <Link to="/" className="mb-2">
                Talent Solutuions
              </Link>
              <Link to="/" className="mb-2">
                Marketing Solutions
              </Link>
              <Link to="/" className="mb-2">
                Advertising
              </Link>
              <Link to="/" className="mb-2">
                Small Business
              </Link>
            </div>
          </Col>
          <Col className="d-flex">
            <div className="w-50">
              <div>
                <div className="d-flex align-items-center">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 16.25A1.25 1.25 0 1113.25 17 1.25 1.25 0 0112 18.25zm1.41-5.46L13 13v1h-2v-2.21l1.49-.79C13.82 10.34 14 9.77 14 9.3c0-.78-.92-1.3-2.3-1.3A7.12 7.12 0 008 9.24V7a8 8 0 013.7-1c3 0 4.3 1.55 4.3 3.3a3.91 3.91 0 01-2.59 3.49z"></path>
                  </svg>
                  <div className="ml-2">
                    <Link to="/">
                      <p
                        className="m-0"
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "700",
                        }}
                      >
                        Questions?
                      </p>
                    </Link>
                    <small className="text-muted">Visit out Help Center</small>
                  </div>
                </div>
                <div></div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
                  </svg>
                  <div className="ml-2">
                    <Link to="/">
                      <p
                        className="m-0"
                        style={{ fontSize: "0.9rem", fontWeight: "700" }}
                      >
                        Manage your acoount and privacy
                      </p>
                    </Link>
                    <small className="text-muted">Go to your settings</small>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="w-50 pl-3">
              <small className="text-muted" style={{ fontSize: "0.8rem" }}>
                Select Language
              </small>
              <select className="w-100">
                <option value="en_US" lang="en-us">
                  English (English)
                </option>
                <option value="ar_AE" lang="ar-ae">
                  العربية (Arabic)
                </option>
                <option value="cs_CZ" lang="cs-cz">
                  Čeština (Czech)
                </option>
                <option value="da_DK" lang="da-dk">
                  Dansk (Danish)
                </option>
                <option value="de_DE" lang="de-de">
                  Deutsch (German)
                </option>
                <option value="es_ES" lang="es-es">
                  Español (Spanish)
                </option>
                <option value="fr_FR" lang="fr-fr">
                  Français (French)
                </option>
                <option value="hi_IN" lang="hi-in">
                  हिंदी (Hindi)
                </option>
                <option value="in_ID" lang="in-id">
                  Bahasa Indonesia (Bahasa Indonesia)
                </option>
                <option value="it_IT" lang="it-it">
                  Italiano (Italian)
                </option>
                <option value="ja_JP" lang="ja-jp">
                  日本語 (Japanese)
                </option>
                <option value="ko_KR" lang="ko-kr">
                  한국어 (Korean)
                </option>
                <option value="ms_MY" lang="ms-my">
                  Bahasa Malaysia (Malay)
                </option>
                <option value="nl_NL" lang="nl-nl">
                  Nederlands (Dutch)
                </option>
                <option value="no_NO" lang="no-no">
                  Norsk (Norwegian)
                </option>
                <option value="pl_PL" lang="pl-pl">
                  Polski (Polish)
                </option>
                <option value="pt_BR" lang="pt-br">
                  Português (Portuguese)
                </option>
                <option value="ro_RO" lang="ro-ro">
                  Română (Romanian)
                </option>
                <option value="ru_RU" lang="ru-ru">
                  Русский (Russian)
                </option>
                <option value="sv_SE" lang="sv-se">
                  Svenska (Swedish)
                </option>
                <option value="th_TH" lang="th-th">
                  ภาษาไทย (Thai)
                </option>
                <option value="tl_PH" lang="tl-ph">
                  Tagalog (Tagalog)
                </option>
                <option value="tr_TR" lang="tr-tr">
                  Türkçe (Turkish)
                </option>
                <option value="uk_UA" lang="uk-ua">
                  Українська (Ukrainian)
                </option>
                <option value="zh_CN" lang="zh-cn">
                  简体中文 (Chinese (Simplified))
                </option>
                <option value="zh_TW" lang="zh-tw">
                  正體中文 (Chinese (Traditional))
                </option>
              </select>
            </div>
          </Col>
        </Row>
        <Row className="px-3">
          <small className="text-muted">LinkedIn Corporation © 2023</small>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;
