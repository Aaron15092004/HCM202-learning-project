import { useState, useEffect, useRef } from "react";
import demoCert from "../../assets/images/demo_certificates.png";
import makdahome from "../../assets/images/makdahome.png";
import thuHa from "../../assets/images/thu-ha.png";
import { Link } from "react-router-dom";

const oldQuizBadge =
  "https://lmsstyle.com/theme/new-learning/pluginfile.php/1/local_mb2builder/images/cloud-playgrounds.jpg";
const oldFlipBadge =
  "https://lmsstyle.com/theme/new-learning/pluginfile.php/1/local_mb2builder/images/professional-certificates.jpg";
const oldTuviBadge =
  "https://lmsstyle.com/theme/new-learning/pluginfile.php/1/local_mb2builder/images/learn-with-experts.jpg";
const oldQuoteBadge =
  "https://lmsstyle.com/theme/new-learning/pluginfile.php/1/local_mb2builder/images/demo_logos.png";
const oldShapeBackground =
  'url("https://lmsstyle.com/theme/new-learning/theme/image.php/mb2nl/local_mb2builder/1722369476/sample-data/2024/07/bg_shape_yellow")';

const journeyMilestones = [
  {
    year: "1911",
    title: "Rời bến Nhà Rồng",
    text: "Ngày 5/6/1911, Nguyễn Tất Thành rời bến Nhà Rồng với khát vọng tìm một con đường mới cho dân tộc. Hành trình ấy không bắt đầu từ sách vở trừu tượng, mà từ câu hỏi rất thực: vì sao đất nước mất độc lập và nhân dân còn chịu nhiều khổ cực.",
  },
  {
    year: "1911-1917",
    title: "Quan sát đời sống lao động",
    text: "Trong những năm bôn ba qua nhiều châu lục, Người làm nhiều nghề, sống gần công nhân, người nghèo và các cộng đồng thuộc địa. Từ thực tiễn đó, Người nhận ra nỗi khổ của dân tộc Việt Nam không tách rời số phận của các dân tộc bị áp bức trên thế giới.",
  },
  {
    year: "1919",
    title: "Yêu sách của nhân dân An Nam",
    text: "Tại Pháp, Nguyễn Ái Quốc gửi bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles. Dù chưa được chấp nhận, sự kiện này đánh dấu bước xuất hiện công khai của tiếng nói Việt Nam trên diễn đàn quốc tế, đặt vấn đề quyền tự do, dân chủ và bình đẳng cho dân tộc.",
  },
  {
    year: "1920",
    title: "Gặp ánh sáng cách mạng",
    text: "Khi đọc Luận cương của Lênin về vấn đề dân tộc và thuộc địa, Người tìm thấy lời giải cho con đường cứu nước. Từ đây, độc lập dân tộc được gắn với giải phóng con người, với quyền sống, quyền làm chủ và tương lai của nhân dân lao động.",
  },
  {
    year: "1925-1930",
    title: "Chuẩn bị lực lượng",
    text: "Người truyền bá tư tưởng cách mạng, viết tài liệu, đào tạo cán bộ và chuẩn bị tổ chức. Những hoạt động này đặt nền móng cho đường lối cứu nước mới: có lý luận dẫn đường, có lực lượng chính trị, có tổ chức và có mục tiêu độc lập rõ ràng.",
  },
  {
    year: "1941",
    title: "Trở về Tổ quốc",
    text: "Sau 30 năm tìm đường cứu nước, Nguyễn Ái Quốc trở về Tổ quốc, trực tiếp lãnh đạo cách mạng Việt Nam. Hành trình bôn ba được kết tinh thành đường lối giải phóng dân tộc, mở ra chặng đường tiến tới Cách mạng Tháng Tám và nền độc lập của nước Việt Nam mới.",
  },
];

const MainContent = () => {
  const [selectedLanguage, setSelectedLanguage] =
    useState("Bắt đầu học HCM202");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const languages = ["Bắt đầu học HCM202"];

  useEffect(() => {
    const initVanta = () => {
      if (window.VANTA && window.VANTA.BIRDS && vantaRef.current) {
        try {
          vantaEffect.current = window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0x7f0712,
            color1: 0xffd54a,
            color2: 0xd71920,
            colorMode: "variance",
            birdSize: 1.35,
            wingSpan: 26.0,
            separation: 42.0,
            alignment: 38.0,
            cohesion: 34.0,
          });
        } catch (err) {
          console.error("Vanta error:", err);
        }
      }
    };

    // Đợi một chút để đảm bảo DOM đã render
    const timer = setTimeout(initVanta, 500);

    return () => {
      clearTimeout(timer);
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div className="pagelayout-content d-flex flex-column">
      {/* Page Header */}
      <div id="page-header" className="nobg">
        <div className="inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="page-heading flexcols">
                  <div className="page-header-left position-relative">
                    <h1 className="heding h2 iscurse maincoursepage">
                      <a
                        className="d-inline-block w-100"
                        href="/courses"
                        tabIndex="-1"
                      >
                        <span className="course-backtext">HCM202</span>
                        Tu tuong Ho Chi Minh
                      </a>
                    </h1>
                  </div>
                  <div className="page-header-right position-relative d-flex flex-wrap align-items-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="page-breadcrumb position-relative breadcrumb_modern">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="flexcols">
                  <div className="breadcrumb">
                    <nav aria-label="Navigation bar">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/courses">Chuyên đề</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/courses">HCM202 Learning</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a
                            href="/courses"
                            aria-current="page"
                            title="Tu tuong Ho Chi Minh"
                          >
                            Tu tuong Ho Chi Minh
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="actions d-flex flex-wrap align-items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="page-secnav position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="secondary-navigation"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-b">
        <div className="mb2notices"></div>
        <div id="main-content">
          <div className="container-fluid">
            <div id="theme-main-content" className="row">
              <section className="content-col col-lg-12">
                <div id="region-main">
                  <div id="page-content">
                    <span
                      className="notifications"
                      id="user-notifications"
                    ></span>
                    <span id="maincontent"></span>

                    {/* Page Context Header */}
                    <div className="page-context-header m-0 p-0">
                      <h2 className="activity-name">Tu tuong Ho Chi Minh</h2>
                    </div>

                    {/* Activity Header */}
                    <div
                      className="activity-header d-flex justify-content-between align-items-center"
                      data-for="page-activity-header"
                    >
                      <div className="activity-header-moo">
                        <span className="sr-only">Completion requirements</span>
                        <div
                          data-region="activity-information"
                          data-activityname="Tu tuong Ho Chi Minh"
                          className="activity-information"
                        ></div>
                      </div>
                    </div>

                    {/* Main Content Role */}
                    <div role="main">
                      <div className="box py-3 generalbox center clearfix">
                        <div className="no-overflow"></div>
                      </div>
                    </div>

                    {/* Page Builder Content */}
                    <div className="mb2-pb-fpsection position-relative pre-bg0 hidden0 light">
                      <div
                        className="section-inner"
                        style={{ paddingTop: "0px", paddingBottom: "0px" }}
                      >
                        {/* Hero Section */}
                        <div
                          ref={vantaRef}
                          className="mb2-pb-row pre-bg0 dark bgfixed0 wave-none va0 bgfixed0 wavefliph1 wavepos0 colgutter-s parallax0 heroimg1 herovbottom herogradl0 herogradr0 bgtextmob0 waveover1 heroonsmall0 bordert0 borderb0 borderfw1 obgimg1 heroisimg isfw0 isbg rowpt-150 rowpb-100"
                          style={{
                            marginTop: "0px",
                            "--mb-pb-row_btcolor": "#dddddd",
                            "--mb-pb-row_bbcolor": "#dddddd",
                            "--mb-pb-row_btw": "1px",
                            "--mb-pb-row_bbw": "1px",
                            "--mb-pb-row_pt": "170px",
                            "--mb-pb-row_pb": "110px",
                          }}
                        >
                          <div className="section-inner mb2-pb-row-inner">
                            <div className="row-topgap w-100"></div>
                            <div className="container-fluid">
                              <div className="row">
                                <div className="mb2-pb-column col-lg-12 noempty light align-none aligncnone mobcenter1 moborder0">
                                  <div
                                    className="column-inner"
                                    style={{
                                      paddingBottom: "30px",
                                      maxWidth: "622px",
                                    }}
                                  >
                                    <div className="clearfix">
                                      <h4
                                        style={{
                                          marginTop: "0px",
                                          marginBottom: "45px",
                                          maxWidth: "2000px",
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                          fontSize: "2.9rem",
                                          "--mb2-pb-heading-thshadow": "0.06em",
                                          "--mb2-pb-heading-tvshadow": "0.04em",
                                          "--mb2-pb-heading-tbshadow": "0px",
                                          "--mb2-pb-heading-tcshadow":
                                            "transparent",
                                        }}
                                        id="typed_69724aa5441fb"
                                        className="heading heading-none upper0 fwglobal lhglobal pbtsize-2"
                                      >
                                        <span className="btext fwglobal">
                                          Học Tư tưởng Hồ Chí Minh
                                        </span>
                                        <span
                                          className="headingtext fwglobal nline0"
                                          style={{ color: "rgb(255, 180, 0)" }}
                                        >
                                          {" "}
                                          HCM202 Learning
                                        </span>
                                      </h4>

                                      {/* Select Dropdown */}
                                      <div
                                        id="select_69724aa54422f"
                                        className="mb2-pb-select isimage0 layouth label1 center0"
                                        style={{
                                          marginTop: "0px",
                                          marginBottom: "45px",
                                          "--mb-pb-selecth": "51px",
                                          "--mb-pb-selectmh": "80",
                                          "--mb-pb-selectfs": "1.18rem",
                                          "--mb-pb-swidth": "287px",
                                        }}
                                        data-target="0"
                                      >
                                        <div className="select-label">
                                          <span className="labeltext">
                                            “Học để hiểu tư tưởng, đạo đức,
                                            phong cách Hồ Chí Minh và vận dụng
                                            vào đời sống hôm nay.”
                                          </span>
                                        </div>
                                        <div className="select-container">
                                          <div className="select-dropdown">
                                            <button
                                              type="button"
                                              id="select_69724aa54422f_btn"
                                              className="mb2-pb-select-btn rounded-1 d-inline-flex align-items-center"
                                              tabIndex="-1"
                                              onClick={() =>
                                                setIsSelectOpen(!isSelectOpen)
                                              }
                                            >
                                              <span className="select-btn-text">
                                                {selectedLanguage}
                                              </span>
                                              <span
                                                className="select-btn-arrow mb2ml-auto"
                                                aria-hidden="true"
                                              ></span>
                                            </button>
                                            <div
                                              id="select_69724aa54422f_items"
                                              className={`select-items-container ${isSelectOpen ? "active" : ""}`}
                                              data-id="select_69724aa54422f"
                                              tabIndex="-1"
                                            >
                                              <ul>
                                                {languages.map((lang) => (
                                                  <li
                                                    key={lang}
                                                    className="mb2-pb-select_item position-relative d-flex align-items-center"
                                                    data-link="#"
                                                    tabIndex="-1"
                                                    onClick={() => {
                                                      setSelectedLanguage(lang);
                                                      setIsSelectOpen(false);
                                                    }}
                                                  >
                                                    <div className="select-item-inner lhsmall d-inline-flex align-items-center">
                                                      <span className="select-text">
                                                        {lang}
                                                      </span>
                                                    </div>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="select-button">
                                            <Link
                                              to="/courses"
                                              className="mb2-pb-btn lhsmall rounded-1 btnborder1 fwglobal typeprimary"
                                              style={{
                                                "--mb2-pb-btn-color":
                                                  "rgb(255, 178, 0)",
                                                "--mb2-pb-btn-bghcolor":
                                                  "rgb(255, 178, 0)",
                                                "--mb2-pb-btn-hcolor":
                                                  "rgb(36, 32, 39)",
                                                "--mb2-pb-btn-borcolor":
                                                  "rgb(255, 178, 0)",
                                              }}
                                            >
                                              Xem chuyên đề
                                            </Link>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Feature List */}
                                      <div
                                        className="mb2-pb-listicon"
                                        style={{ marginBottom: "30px" }}
                                      >
                                        <ul
                                          className="theme-listicon mb2-pb-sortable-subelements iconbg1 horizontal1 border0 fwbold alignnone"
                                          style={{
                                            "--mb2-pb-listicon-fs": "1rem",
                                            "--mb2-pb-listicon-isize":
                                              "2.74rem",
                                            "--mb2-pb-listicon-space":
                                              "1.87rem",
                                          }}
                                        >
                                          <li className="mb2-pb-listicon_item">
                                            <div className="item-content">
                                              <span
                                                className="iconel d-inline-flex justify-content-center align-items-center"
                                                style={{
                                                  backgroundColor:
                                                    "rgb(255, 178, 0)",
                                                  color: "rgb(139, 6, 19)",
                                                }}
                                              >
                                                <i className="bi bi-check-lg"></i>
                                              </span>
                                              <span
                                                className="list-text"
                                                style={{
                                                  color: "rgb(215, 25, 32)",
                                                }}
                                              >
                                                Học chuyên đề HCM202
                                              </span>
                                            </div>
                                          </li>
                                          <li className="mb2-pb-listicon_item">
                                            <div className="item-content">
                                              <span
                                                className="iconel d-inline-flex justify-content-center align-items-center"
                                                style={{
                                                  backgroundColor:
                                                    "rgb(255, 178, 0)",
                                                  color: "rgb(139, 6, 19)",
                                                }}
                                              >
                                                <i className="bi bi-check-lg"></i>
                                              </span>
                                              <span
                                                className="list-text"
                                                style={{
                                                  color: "rgb(215, 25, 32)",
                                                }}
                                              >
                                                Luyện tập trắc nghiệm HCM202
                                              </span>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Hero Image */}
                            <div className="hero-img-wrap" aria-hidden="true">
                              <div className="hero-img-wrap2">
                                <div
                                  className="hero-img-wrap3"
                                  style={{
                                    width: "570px",
                                    left: "48%",
                                    "--mb2-pb-herovm": "-4px",
                                  }}
                                >
                                  <img
                                    className="hero-img hero-img-makdahome lazy"
                                    src={makdahome}
                                    data-src={makdahome}
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Trusted By Section */}
                        <div
                          className="mb2-pb-row pre-bg0 light bgfixed0 wave-none va0 bgfixed0 wavefliph0 wavepos0 colgutter-s parallax0 heroimg0 herovcenter herogradl0 herogradr0 bgtextmob0 waveover1 heroonsmall1 bordert0 borderb0 borderfw1 obgimg1 heroisvideo isfw0 nobg rowpt-50 rowpb-0"
                          style={{
                            marginTop: "0px",
                            "--mb-pb-row_btcolor": "#dddddd",
                            "--mb-pb-row_bbcolor": "#dddddd",
                            "--mb-pb-row_btw": "1px",
                            "--mb-pb-row_bbw": "1px",
                            "--mb-pb-row_pt": "60px",
                            "--mb-pb-row_pb": "0px",
                          }}
                        >
                          <div className="section-inner mb2-pb-row-inner">
                            <div className="row-topgap w-100"></div>
                            <div className="container-fluid">
                              <div className="row">
                                <div className="mb2-pb-column col-lg-12 noempty light align-none aligncnone mobcenter0 moborder0">
                                  <div
                                    className="column-inner"
                                    style={{
                                      paddingBottom: "30px",
                                      maxWidth: "2000px",
                                    }}
                                  >
                                    <div className="clearfix">
                                      <h4
                                        style={{
                                          marginTop: "0px",
                                          marginBottom: "30px",
                                          maxWidth: "2000px",
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                          fontSize: "1.25rem",
                                          "--mb2-pb-heading-thshadow": "0.06em",
                                          "--mb2-pb-heading-tvshadow": "0.04em",
                                          "--mb2-pb-heading-tbshadow": "0px",
                                          "--mb2-pb-heading-tcshadow":
                                            "transparent",
                                        }}
                                        id="typed_69724aa544346"
                                        className="heading heading-center upper0 fwglobal lhglobal pbtsize-1"
                                      >
                                        <span
                                          className="headingtext fwglobal nline0"
                                          style={{ color: "#d71920" }}
                                        >
                                          “Không có gì quý hơn độc lập, tự do.”
                                          - Chủ tịch Hồ Chí Minh
                                        </span>
                                      </h4>
                                      <div
                                        className="mb2-image align-none center1"
                                        style={{
                                          marginBottom: "30px",
                                          width: "450px",
                                          maxWidth: "100%",
                                        }}
                                      >
                                        <img
                                          className="lazy"
                                          src={oldQuoteBadge}
                                          data-src={oldQuoteBadge}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div
                            className="mb2-pb-row pre-bg0 light bgfixed0 wave-none va0 bgfixed0 wavefliph0 wavepos0 colgutter-s parallax0 heroimg0 herovcenter herogradl0 herogradr0 bgtextmob0 waveover1 heroonsmall1 bordert0 borderb0 borderfw1 obgimg1 heroisvideo isfw0 nobg rowpt-0 rowpb-0"
                            style={{
                              "--mb-pb-row_bbcolor": "#dddddd",
                              "--mb-pb-row_bbw": "1px",
                              "--mb-pb-row_btcolor": "#dddddd",
                              "--mb-pb-row_btw": "1px",
                              "--mb-pb-row_pb": "0px",
                              "--mb-pb-row_pt": "0px",
                              marginTop: "0px",
                            }}
                          >
                            <div className="section-inner mb2-pb-row-inner">
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="mb2-pb-column col-lg-12 noempty light align-none aligncnone mobcenter0 moborder0">
                                    <div
                                      className="column-inner"
                                      style={{
                                        maxWidth: "4000px",
                                        paddingBottom: "30px",
                                      }}
                                    >
                                      <div className="clearfix">
                                        <div
                                          className="theme-text"
                                          style={{
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            maxWidth: "2000px",
                                          }}
                                        >
                                          <div
                                            className="theme-text-inner align-none text-hcm-red rounded0 gradient0 light"
                                            style={{
                                              "--mb2-pb-graddeg": "180deg",
                                            }}
                                          >
                                            <div
                                              className="theme-text-text upper0 fwbold lhglobal"
                                              style={{
                                                color: "rgb(215, 25, 32)",
                                                fontSize: "1rem",
                                              }}
                                            >
                                              <p>Bạn đã sẵn sàng chưa?</p>
                                            </div>
                                          </div>
                                        </div>
                                        <h4
                                          className="heading heading-none upper0 fwglobal lhglobal pbtsize-2"
                                          id="typed_69724aa54461f"
                                          style={{
                                            "--mb2-pb-heading-tbshadow": "0px",
                                            "--mb2-pb-heading-tcshadow":
                                              "transparent",
                                            "--mb2-pb-heading-thshadow":
                                              "0.06em",
                                            "--mb2-pb-heading-tvshadow":
                                              "0.04em",
                                            fontSize: "2.3rem",
                                            marginBottom: "15px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            marginTop: "0px",
                                            maxWidth: "2000px",
                                          }}
                                        >
                                          <span
                                            className="headingtext fwglobal nline0"
                                            style={{ color: "#d71920" }}
                                          >
                                            Học thông qua các trò chơi thú vị
                                          </span>
                                        </h4>
                                        <div
                                          className="theme-text"
                                          style={{
                                            marginBottom: "50px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            maxWidth: "1994px",
                                          }}
                                        >
                                          <div
                                            className="theme-text-inner align-none text- rounded0 gradient0 light"
                                            style={{
                                              "--mb2-pb-graddeg": "180deg",
                                            }}
                                          >
                                            <div
                                              className="theme-text-text upper0 fwglobal lhglobal"
                                              style={{
                                                fontSize: "1rem",
                                              }}
                                            >
                                              <p>
                                                Kết hợp lý thuyết, ví dụ thực
                                                tiễn và hoạt động ôn tập để giúp
                                                người học nắm các nội dung cốt
                                                lõi của môn Tư tưởng Hồ Chí
                                                Minh.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="theme-boxes theme-boxesimg type-4 gutter-normal theme-col-3 smtitle1 rounded0 wave0 paddingm linkbtn2 btnhor0 theme-boxesimg shadow1 itemlink0 tcenter0 boxcolor-primary center1 clearfix"
                                          style={{
                                            "--mb2-pb-bxbgcolor":
                                              "rgba(255, 204, 51, 0.12)",
                                            "--mb2-pb-bxbocolor":
                                              "rgb(215, 25, 32)",
                                          }}
                                        >
                                          <div className="theme-box el_onmobile1">
                                            <div
                                              className="theme-boximg position-relative"
                                              style={{
                                                "--mb2-pb-bxbgcolor":
                                                  "rgba(255, 204, 51, 0.12)",
                                                "--mb2-pb-bxbocolor":
                                                  "rgb(215, 25, 32)",
                                                "--mb2-pb-bxborder": "2px",
                                              }}
                                            >
                                              <div className="box-allcontent">
                                                <div className="box-image">
                                                  <img
                                                    alt="HCM202 quiz practice"
                                                    className="theme-boximg-img lazy"
                                                    data-src={oldQuizBadge}
                                                    src={oldQuizBadge}
                                                    style={{
                                                      maxWidth: "800px",
                                                    }}
                                                  />
                                                </div>
                                                <div className="vtable-wrapp">
                                                  <div className="vtable">
                                                    <div className="vtable-cell">
                                                      <div className="box-content">
                                                        <h4
                                                          className="box-title pbtsize-1 fwglobal lhglobal"
                                                          style={{
                                                            fontSize: "1.4rem",
                                                          }}
                                                        >
                                                          <span className="box-title-text">
                                                            Trắc nghiệm HCM202
                                                          </span>
                                                        </h4>
                                                        <div className="box-desc">
                                                          Hệ thống câu hỏi giúp
                                                          củng cố kiến thức theo
                                                          từng chuyên đề Tư
                                                          tưởng Hồ Chí Minh.
                                                        </div>
                                                        <span className="theme-boximg-color" />
                                                        <div className="box-readmore">
                                                          <Link
                                                            className="boxlink mb2-pb-btn typeprimary sizenormal rounded-1 btnborder0 fwglobal"
                                                            to="/quiz"
                                                            style={{
                                                              "--mb2-pb-btn-bgcolor":
                                                                "rgb(215, 25, 32)",
                                                              "--mb2-pb-btn-bghcolor":
                                                                "rgb(139, 6, 19)",
                                                            }}
                                                          >
                                                            Bắt đầu ôn tập
                                                          </Link>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="theme-boximg-color" />
                                              <div
                                                className="theme-boximg-imgel lazy"
                                                data-bg={oldQuizBadge}
                                              >
                                                <div
                                                  className="gradient-el gradient-left"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(to right, rgba(255, 204, 51, 0.16), rgba(255, 255, 255, 0))",
                                                  }}
                                                />
                                                <div
                                                  className="gradient-el gradient-right"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 204, 51, 0.16))",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="theme-box el_onmobile1">
                                            <div
                                              className="theme-boximg position-relative"
                                              style={{
                                                "--mb2-pb-bxborder": "2px",
                                              }}
                                            >
                                              <div className="box-allcontent">
                                                <div className="box-image">
                                                  <img
                                                    alt="HCM202 memory cards"
                                                    className="theme-boximg-img lazy"
                                                    data-src={oldFlipBadge}
                                                    src={oldFlipBadge}
                                                    style={{
                                                      maxWidth: "800px",
                                                    }}
                                                  />
                                                </div>
                                                <div className="vtable-wrapp">
                                                  <div className="vtable">
                                                    <div className="vtable-cell">
                                                      <div className="box-content">
                                                        <h4
                                                          className="box-title pbtsize-1 fwglobal lhglobal"
                                                          style={{
                                                            fontSize: "1.4rem",
                                                          }}
                                                        >
                                                          <span className="box-title-text">
                                                            Lật Thẻ HCM202
                                                          </span>
                                                        </h4>
                                                        <div className="box-desc">
                                                          Thẻ học tập giúp ghi
                                                          nhớ nhanh khái niệm,
                                                          mốc nội dung và ý
                                                          chính của môn HCM202.
                                                        </div>
                                                        <span className="theme-boximg-color" />
                                                        <div className="box-readmore">
                                                          <Link
                                                            className="boxlink mb2-pb-btn typeprimary sizenormal rounded-1 btnborder0 fwglobal"
                                                            to="/flip"
                                                            style={{
                                                              "--mb2-pb-btn-bgcolor":
                                                                "rgb(215, 25, 32)",
                                                              "--mb2-pb-btn-bghcolor":
                                                                "rgb(139, 6, 19)",
                                                            }}
                                                          >
                                                            Chơi thẻ nhớ
                                                          </Link>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="theme-boximg-color" />
                                              <div
                                                className="theme-boximg-imgel lazy"
                                                data-bg={oldFlipBadge}
                                              >
                                                <div
                                                  className="gradient-el gradient-left"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(to right, rgba(255, 204, 51, 0.16), rgba(255, 255, 255, 0))",
                                                  }}
                                                />
                                                <div
                                                  className="gradient-el gradient-right"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 204, 51, 0.16))",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="theme-box el_onmobile1">
                                            <div
                                              className="theme-boximg position-relative"
                                              style={{
                                                "--mb2-pb-bxbgcolor":
                                                  "rgba(255, 178, 0, 0.12)",
                                                "--mb2-pb-bxbocolor":
                                                  "rgb(255, 178, 0)",
                                                "--mb2-pb-bxborder": "2px",
                                              }}
                                            >
                                              <div className="box-allcontent">
                                                <div className="box-image">
                                                  <img
                                                    alt="Lưới lửa phòng không route badge"
                                                    className="theme-boximg-img lazy"
                                                    data-src={oldTuviBadge}
                                                    src={oldTuviBadge}
                                                    style={{
                                                      maxWidth: "800px",
                                                    }}
                                                  />
                                                </div>
                                                <div className="vtable-wrapp">
                                                  <div className="vtable">
                                                    <div className="vtable-cell">
                                                      <div className="box-content">
                                                        <h4
                                                          className="box-title pbtsize-1 fwglobal lhglobal"
                                                          style={{
                                                            fontSize: "1.4rem",
                                                          }}
                                                        >
                                                          <span className="box-title-text">
                                                            Lưới lửa phòng không
                                                          </span>
                                                        </h4>
                                                        <div className="box-desc">
                                                          Game phản xạ về phòng
                                                          không và quyết thắng,
                                                          cảm hứng từ tinh thần
                                                          nhân dân.
                                                        </div>
                                                        <span className="theme-boximg-color" />
                                                        <div className="box-readmore">
                                                          <Link
                                                            className="boxlink mb2-pb-btn typeprimary sizenormal rounded-1 btnborder0 fwglobal"
                                                            to="/game"
                                                            style={{
                                                              "--mb2-pb-btn-bgcolor":
                                                                "rgb(255, 178, 0)",
                                                              "--mb2-pb-btn-bghcolor":
                                                                "rgb(215, 25, 32)",
                                                              "--mb2-pb-btn-color":
                                                                "rgb(36, 32, 39)",
                                                              "--mb2-pb-btn-hcolor":
                                                                "rgb(255, 255, 255)",
                                                            }}
                                                          >
                                                            Vào chơi
                                                          </Link>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="theme-boximg-color" />
                                              <div
                                                className="theme-boximg-imgel lazy"
                                                data-bg={oldTuviBadge}
                                              >
                                                <div
                                                  className="gradient-el gradient-left"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(to right, rgba(255, 178, 0, 0.16), rgba(255, 255, 255, 0))",
                                                  }}
                                                />
                                                <div
                                                  className="gradient-el gradient-right"
                                                  style={{
                                                    backgroundImage:
                                                      "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 178, 0, 0.16))",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="mb2-pb-row pre-bg0 light bgfixed0 wave-none va0 bgfixed0 wavefliph0 wavepos0 colgutter-s parallax0 heroimg0 herovcenter herogradl0 herogradr0 bgtextmob0 waveover1 heroonsmall1 bordert0 borderb0 borderfw1 obgimg1 heroisvideo isfw0 nobg rowpt-50 rowpb-0"
                            style={{
                              "--mb-pb-row_bbcolor": "#dddddd",
                              "--mb-pb-row_bbw": "1px",
                              "--mb-pb-row_btcolor": "#dddddd",
                              "--mb-pb-row_btw": "1px",
                              "--mb-pb-row_pb": "0px",
                              "--mb-pb-row_pt": "50px",
                              marginTop: "0px",
                            }}
                          >
                            <div className="section-inner mb2-pb-row-inner">
                              <div className="row-topgap w-100" />
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="mb2-pb-column col-lg-12 noempty light align-none aligncnone mobcenter1 moborder0">
                                    <div
                                      className="column-inner"
                                      style={{
                                        maxWidth: "2000px",
                                        paddingBottom: "30px",
                                      }}
                                    >
                                      <div className="clearfix">
                                        <div
                                          className="mb2-pb-ba position-relative align-items-end imgpos-left iscontent1 imgcrop0 imgvalignend imgonsm0 rounded0 shadow1 paddingnormal d-flex flex-column justify-content-center"
                                          style={{
                                            "--mb-pb-ba_bgcolor":
                                              "rgb(255, 235, 156)",
                                            "--mb-pb-ba_color":
                                              "rgb(                                                  79,                                                  76,                                                  81                                                )",
                                            "--mb-pb-ba_cwidth": "610px",
                                            "--mb-pb-ba_imghpos": "-3%",
                                            "--mb-pb-ba_tcolor":
                                              "rgb(                                                  36,                                                  32,                                                  39                                                )",
                                            backgroundImage: oldShapeBackground,
                                            marginBottom: "30px",
                                            minHeight: "477px",
                                          }}
                                        >
                                          <div className="mb2-pb-ba_inner position-relative">
                                            <div className="mb2-pb-ba_title">
                                              <h4
                                                className="ba_title title mb-0 pbtsize-2 fwglobal lhglobal"
                                                style={{
                                                  fontSize: "2.3rem",
                                                }}
                                              >
                                                <span className="title-text">
                                                  Kho tài liệu phong phú giúp
                                                  bạn học hiệu quả hơn
                                                </span>
                                              </h4>
                                            </div>
                                            <div
                                              className="mb2-pb-ba_content fwglobal lhglobal"
                                              style={{
                                                fontSize: "1rem",
                                                marginTop: "1.9rem",
                                              }}
                                            >
                                              <p>
                                                Tổng hợp chuyên đề, ghi chú học
                                                tập và gợi ý ôn tập môn Tư tưởng
                                                Hồ Chí Minh. Nội dung được trình
                                                bày rõ ràng để bạn dễ đọc, dễ
                                                sửa và dễ mở rộng ở các phase
                                                sau.
                                              </p>
                                              <img
                                                alt="HCM202 study badge"
                                                src={demoCert}
                                                style={{
                                                  marginTop: "0.9rem",
                                                }}
                                                width="280"
                                              />
                                            </div>
                                            <div
                                              className="mb2-pb-ba_btn"
                                              style={{
                                                marginTop: "2.1rem",
                                              }}
                                            >
                                              <Link
                                                className="mb2-pb-btn sizexlg rounded-1 btnborder0"
                                                to="/courses"
                                                style={{
                                                  "--mb2-pb-btn-bgcolor":
                                                    "rgb(215, 25, 32)",
                                                  "--mb2-pb-btn-bghcolor":
                                                    "rgb(139, 6, 19)",
                                                }}
                                              >
                                                Vào xem thử
                                              </Link>
                                            </div>
                                          </div>
                                          <div
                                            aria-hidden="true"
                                            className="ba_img d-flex position-absolute w-100 h-100"
                                          >
                                            <div className="ba_img2 d-flex position-relative w-100">
                                              <div
                                                className="ba_img3 position-absolute"
                                                style={{
                                                  "--mb2-pb-ba_imgmt": "0px",
                                                  width: "500px",
                                                }}
                                              >
                                                <img
                                                  alt="Ho Chi Minh themed study artwork"
                                                  className="ba_img_img lazy"
                                                  data-src={thuHa}
                                                  src={thuHa}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <section className="hcm-journey-section">
                            <div className="hcm-journey-inner">
                              <div className="hcm-journey-head journey-reveal">
                                <span className="hcm-journey-kicker">
                                  Hành trình 30 năm
                                </span>
                                <h3>Ba mươi năm tìm đường cứu nước</h3>
                                <p>
                                  Từ năm 1911 đến năm 1941, Chủ tịch Hồ Chí Minh
                                  đi qua nhiều quốc gia, quan sát đời sống nhân
                                  dân lao động và từng bước tìm ra con đường
                                  giải phóng dân tộc Việt Nam.
                                </p>
                              </div>

                              <div className="hcm-journey-timeline">
                                {journeyMilestones.map((milestone, index) => (
                                  <article
                                    className="hcm-journey-item journey-reveal"
                                    style={{
                                      "--journey-delay": `${index * 120}ms`,
                                    }}
                                    key={milestone.year}
                                  >
                                    <div className="hcm-journey-dot">
                                      <span>{index + 1}</span>
                                    </div>
                                    <div className="hcm-journey-card">
                                      <span className="hcm-journey-year">
                                        {milestone.year}
                                      </span>
                                      <h4>{milestone.title}</h4>
                                      <p>{milestone.text}</p>
                                    </div>
                                  </article>
                                ))}
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>

                    {/* Page Date */}
                    <span className="mb2-pb-pagedate sr-only">
                      Last modified: Friday, 23 May 2025, 12:58 AM
                    </span>

                    {/* Course Navigation */}
                    <div className="theme-coursenav flexcols"></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="mb2notices"></div>
      </div>
    </div>
  );
};

export default MainContent;
