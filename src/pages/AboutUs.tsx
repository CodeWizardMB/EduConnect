import { FunctionComponent, useState, useCallback } from "react";
import Projects3 from "../components/Projects3";
import PortalPopup from "../components/PortalPopup";
import Projects2 from "../components/Projects2";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [isProjects1Open, setProjects1Open] = useState(false);
  const navigate = useNavigate();

  const onImage4Click = useCallback(() => {
    navigate("/homepagev2");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/homepagev2");
  }, [navigate]);

  const openProjects = useCallback(() => {
    setProjectsOpen(true);
  }, []);

  const closeProjects = useCallback(() => {
    setProjectsOpen(false);
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const openProjects1 = useCallback(() => {
    setProjects1Open(true);
  }, []);

  const closeProjects1 = useCallback(() => {
    setProjects1Open(false);
  }, []);

  return (
    <>
      <div className={styles.aboutUs}>
        <div className={styles.image4Parent}>
          <img
            className={styles.image4Icon}
            alt=""
            src="/image-4@2x.png"
            onClick={onImage4Click}
          />
          <div className={styles.homeParent}>
            <div className={styles.home} onClick={onHomeTextClick}>
              Home
            </div>
            <div className={styles.projectsParent} onClick={openProjects}>
              <div className={styles.projects}>Projects</div>
              <img className={styles.groupChild} alt="" src="/polygon-1.svg" />
            </div>
            <div className={styles.aboutUs1} onClick={onAboutUsTextClick}>
              About Us
            </div>
          </div>
          <div className={styles.userParent}>
            <div className={styles.user} onClick={openProjects1}>
              <img className={styles.fotoIcon} alt="" src="/foto@2x.png" />
              <div className={styles.danteLucca}>Dante Lucca</div>
              <img className={styles.downIcon} alt="" src="/down.svg" />
            </div>
            <div className={styles.donate}>
              <div className={styles.donate1}>Donate</div>
            </div>
          </div>
        </div>
        <b className={styles.ourMisssionAndContainer}>
          <p className={styles.ourMisssion}>{`Our Misssion, `}</p>
          <p className={styles.andVision}>And Vision.</p>
        </b>
        <b className={styles.ourValues}>Our Values</b>
        <div className={styles.donateParent}>
          <div className={styles.donate2}>
            <div className={styles.donate1}>Donate</div>
          </div>
          <div className={styles.donateWrapper}>
            <div className={styles.donate1}>Donate</div>
          </div>
          <b className={styles.volunteerEmpoweringChange}>
            Volunteer: Empowering Change Through Collaboration
          </b>
          <div className={styles.atEduconnectWere}>
            At EduConnect, we're dedicated to connecting skilled volunteers with
            meaningful projects in education. From individuals to nonprofits and
            beyond, we provide an open avenue for collaboration, driving greater
            efficiency and impact. EduConnect is fueled by volunteers like you,
            united in our mission to create positive change in education
            worldwide.
          </div>
        </div>
        <div className={styles.educonnectIsANonProfitEduParent}>
          <div className={styles.educonnectIsA}>
            Educonnect is a non-profit educational, cultural center. Our mission
            is to build relationships, share resources, and develop skills to
            enhance lives our Core Programs.
          </div>
          <div className={styles.donate5}>Donate</div>
          <div className={styles.contactUs}>Contact us</div>
          <div className={styles.faq}>FAQ</div>
          <div className={styles.help}>Help</div>
          <div className={styles.volunteer}>Volunteer</div>
          <div className={styles.createProjects}>Create Projects</div>
          <div className={styles.blogs}>Blogs</div>
          <div className={styles.home1}>Home</div>
          <div className={styles.aboutUs2}>About us</div>
          <img className={styles.image4Icon1} alt="" src="/image-4@2x.png" />
          <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
        </div>
        <div className={styles.copyright2023AllRightReserParent}>
          <div className={styles.copyright2023AllContainer}>
            <p className={styles.ourMisssion}>
              Copyright 2023 All right reserved
            </p>
          </div>
          <div className={styles.privacy}>{`Privacy `}</div>
          <div className={styles.termsOfServices}>Terms of services</div>
        </div>
        <img
          className={styles.unsplashukzhlkoz1ieIcon}
          alt=""
          src="/unsplashukzhlkoz1ie@2x.png"
        />
        <div className={styles.atEduconnectWeContainer}>
          <p className={styles.ourMisssion}>
            " At EduConnect, we are on a mission to democratize education,
            bridging the gap between learners and educators worldwide. Our
            vision is to create a world where every individual, regardless of
            their background, has access to quality education, empowering them
            to realize their full potential and shape a brighter future for
            themselves and their communities ."
          </p>
        </div>
        <div className={styles.accessibilityParent}>
          <b className={styles.danteLucca}>Accessibility</b>
          <img
            className={styles.roadRouteIcon1}
            alt=""
            src="/roadrouteicon-1.svg"
          />
          <div className={styles.weBelieveIn}>
            We believe in providing equal opportunities for education to all
            individuals, regardless of their background, location, or
            socioeconomic status.
          </div>
        </div>
        <div className={styles.empowermentParent}>
          <b className={styles.danteLucca}>Empowerment</b>
          <img
            className={styles.bodybuildingMusclesIcon1}
            alt=""
            src="/bodybuildingmusclesicon-1.svg"
          />
          <div className={styles.weBelieveIn}>
            We empower learners to take control of their educational journey,
            fostering independence, confidence, and a lifelong passion for
            learning.
          </div>
        </div>
        <div className={styles.inclusivityParent}>
          <b className={styles.danteLucca}>Inclusivity</b>
          <img
            className={styles.familyParentsIcon1}
            alt=""
            src="/familyparentsicon-1.svg"
          />
          <div className={styles.weBelieveIn}>
            We foster a diverse and inclusive community where every voice is
            valued and respected, recognizing the richness that comes from
            embracing different perspectives and experiences.
          </div>
        </div>
        <div className={styles.collaborationParent}>
          <b className={styles.danteLucca}>Collaboration</b>
          <img
            className={styles.handshakeIcon11}
            alt=""
            src="/handshakeicon-1-1.svg"
          />
          <div className={styles.weBelieveIn}>
            We promote collaboration among learners, educators, and communities,
            recognizing that collective efforts lead to greater innovation,
            understanding, and impact.
          </div>
        </div>
        <div className={styles.excellenceParent}>
          <b className={styles.danteLucca}>Excellence</b>
          <img
            className={styles.certificateMedalQualityIcon}
            alt=""
            src="/certificatemedalqualityicon-1.svg"
          />
          <div className={styles.weBelieveIn}>
            We are committed to excellence in education, striving for the
            highest standards of quality, integrity, and continuous improvement
            in everything we do.
          </div>
        </div>
        <div className={styles.innovationParent}>
          <b className={styles.danteLucca}>Innovation</b>
          <img className={styles.lampIcon1} alt="" src="/lampicon-1.svg" />
          <div className={styles.weBelieveIn}>
            We embrace innovation and creativity as catalysts for positive
            change in education, constantly exploring new ideas, technologies,
            and methodologies to enhance the learning experience.
          </div>
        </div>
        <div className={styles.communityEngagementParent}>
          <b className={styles.communityEngagement}>Community Engagement</b>
          <img
            className={styles.onlineCommunityIcon1}
            alt=""
            src="/onlinecommunityicon-1.svg"
          />
          <div className={styles.weBelieveIn}>
            We actively engage with our community of learners, educators, and
            partners, fostering meaningful connections, dialogue, and support to
            create a thriving ecosystem of learning.
          </div>
        </div>
        <div className={styles.accountabilityParent}>
          <b className={styles.danteLucca}>Accountability</b>
          <img
            className={styles.projectManagerIcon1}
            alt=""
            src="/projectmanagericon-1.svg"
          />
          <div className={styles.weBelieveIn}>
            We hold ourselves accountable to our learners, educators, and
            stakeholders, ensuring transparency, integrity, and ethical conduct
            in all aspects of our operations.
          </div>
        </div>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img className={styles.aboutUsChild} alt="" src="/group-52.svg" />
      </div>
      {isProjectsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProjects}
        >
          <Projects3 onClose={closeProjects} />
        </PortalPopup>
      )}
      {isProjects1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProjects1}
        >
          <Projects2 onClose={closeProjects1} />
        </PortalPopup>
      )}
    </>
  );
};

export default AboutUs;
