import React from "react";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import medal from "../../images/main/medal.svg";
import medal_bck from "../../images/main/medal_bck.svg";
import star from "../../images/main/star.svg";
import star_bck from "../../images/main/star_bck.svg";
import rush from "../../images/main/rush.svg";
import rush_bck from "../../images/main/rush_bck.svg";

const Preview = () => {
  return (
    <Row id="preview" className="main-preview row-cols-1 row-cols-md-3">
      <Column>
        <Row className="warranties row-cols-2 row-cols-md-1 justify-content-center gap-md-3">
          <Row className="justify-content-center row-cols-1">
            <Column
              xs={8}
              os={6}
              sm={5}
              md={6}
              lg={5}
              xl={5}
              xxl={4}
              className="wrnt-img position-relative d-flex justify-content-center"
            >
              <Image
                src={medal}
                className="position-absolute top-50 start-50 ml-2 translate-middle "
              />
              <Image src={medal_bck} className="w-100" />
            </Column>
            <Column>
              <h3 className="preview-title-text">
                Гарантия <br />
                качества
              </h3>
            </Column>
          </Row>
          <Column xs={8} md={12}>
            <p className="wrnt-txt preview-text">
              Наша клининговая компания гарантирует высочайшее качество
              предоставляемых услуг. Мы работаем только с опытными и обученными
              сотрудниками, используем современное оборудование и проверенные
              профессиональные средства.
            </p>
          </Column>
        </Row>
      </Column>
      <Column>
        <Row className="employees row-cols-2 row-cols-md-1 justify-content-center gap-md-3">
          <Row className="justify-content-center row-cols-1">
            <Column
              xs={8}
              os={6}
              sm={5}
              md={6}
              lg={5}
              xl={5}
              xxl={4}
              className="wrnt-img position-relative d-flex justify-content-center"
            >
              <Image
                src={star}
                className="position-absolute top-50 start-50 ml-2 translate-middle "
              />
              <Image src={star_bck} className="w-100" />
            </Column>
            <Column>
              <h3 className="preview-title-text">
                Опытные <br />
                работники
              </h3>
            </Column>
          </Row>
          <Column xs={8} md={12}>
            <p className="empl-txt preview-text">
              Сотрудники - профессионалы в работе с поверхностями. Эффективное
              удаление пятен и загрязнений. Профессиональные услуги для
              клиентов.
            </p>
          </Column>
        </Row>
      </Column>
      <Column>
        <Row className="fast row-cols-2 row-cols-md-1 justify-content-center gap-md-3">
          <Row className="justify-content-center row-cols-1">
            <Column
              xs={8}
              os={6}
              sm={5}
              md={6}
              lg={5}
              xl={5}
              xxl={4}
              className="wrnt-img position-relative d-flex justify-content-center"
            >
              <Image
                src={rush}
                className="position-absolute top-50 start-50 ml-2 translate-middle "
              />
              <Image src={rush_bck} className="w-100" />
            </Column>
            <Column>
              <h3 className="preview-title-text">
                Быстрый <br />
                сервис
              </h3>
            </Column>
          </Row>
          <Column xs={8} md={12}>
            <p className="fst-txt preview-text">
              Наши клининговые услуги быстро и надежно решат все проблемы с
              чистотой. Мы предлагаем широкий спектр услуг - уборка квартир,
              офисов и после ремонта. Быстрая работа, идеальная чистота.
            </p>
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default Preview;
