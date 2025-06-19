import './App.css'
import { motion, AnimatePresence } from 'framer-motion'
import timelineImage from './assets/timeline.png'
import ReactPlayer from 'react-player'
import primaryTeacher from './assets/primary_teacher.png'
import academyPanorama1 from './assets/academy_panorama_1.png'
import academyPanorama2 from './assets/academy_panorama_2.png'
import mapImage from './assets/map.png'
import zestHead1 from './assets/zest-head1.png'
import intro1 from './assets/intro_1.png'
import picture1 from './assets/picture1.jpeg'
import picture2 from './assets/picture2.jpeg'
import picture3 from './assets/picture3.jpeg'
import picture4 from './assets/picture4.jpeg'
import picture5 from './assets/picture5.jpeg'
import picture6 from './assets/picture6.jpeg'
import picture7 from './assets/picture7.png'
import picture8 from './assets/picture8.png'
import { useState } from 'react'

function App() {
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);
  const [isPictureModalOpen, setIsPictureModalOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState('');

  return (
    <div className="container">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <nav>
          <ul>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#top"><strong>TEAM ZEST</strong></a>
            </motion.li>
          </ul>
          <ul className="desktop-menu mobile-menu">
            {[
              { label: '소개', href: '#top' },
              { label: '시간표', href: '#timeline' },
              { label: '위치', href: '#location' },
              { label: <strong>문의하기</strong>, href: '#contact', isContact: true }
            ].map((item, index) => (
              <motion.li
                key={typeof item.label === 'string' ? item.label : '문의하기'}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={item.isContact ? 'contact-menu' : ''}
              >
                <a href={item.href}>{item.label}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <main>
        <motion.section
          id="intro"
          className="intro-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="intro-content">
            <motion.div
              className="intro-video-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=unOutwB_puc"
                width="100%"
                height="100%"
                style={{ aspectRatio: '16/9' }}
                controls
                playing
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              하늘을 바라만 보고는 아닌,<br />하늘을 날아 보는 것은 어떠세요?<br />
              TEAM ZEST가 실현시켜 드리겠습니다.
            </motion.p>
            <motion.a
              href="#contact"
              className="intro-contact-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              문의하기
            </motion.a>
          </div>
        </motion.section>

        <motion.div
          className="zest-head-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={zestHead1} alt="TEAM ZEST Head" />
        </motion.div>

        <motion.section
          id="teacher"
          className="teacher-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="teacher-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              강사 소개
            </motion.h2>
            <motion.div
              className="teacher-image-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="teacher-card">
                <img src={primaryTeacher} alt="주요 강사" />
                <div className="teacher-name">오민석 대표 원장</div>
              </div>
            </motion.div>
            <motion.div
              className="intro1-image-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img src={intro1} alt="TEAM ZEST Intro" />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="timeline"
          className="timeline-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="timeline-content">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              수업 시간표
            </motion.h3>
            <motion.div
              className="timeline-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() => setIsTimelineModalOpen(true)}
              style={{ cursor: 'pointer' }}
            >
              <img src={timelineImage} alt="TEAM ZEST Timeline" />
            </motion.div>
          </div>
        </motion.section>

        <AnimatePresence>
          {isTimelineModalOpen && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTimelineModalOpen(false)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={timelineImage} alt="TEAM ZEST Timeline" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.section
          id="pictures"
          className="pictures-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="pictures-content">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              사진
            </motion.h3>
            <motion.div
              className="pictures-grid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src={picture1} 
                alt="TEAM ZEST Picture 1" 
                onClick={() => {
                  setSelectedPicture(picture1);
                  setIsPictureModalOpen(true);
                }}
                style={{ cursor: 'pointer' }}
              />
              <img 
                src={picture2} 
                alt="TEAM ZEST Picture 2" 
                onClick={() => {
                  setSelectedPicture(picture2);
                  setIsPictureModalOpen(true);
                }}
                style={{ cursor: 'pointer' }}
              />
              <img 
                src={picture3} 
                alt="TEAM ZEST Picture 3" 
                onClick={() => {
                  setSelectedPicture(picture3);
                  setIsPictureModalOpen(true);
                }}
                style={{ cursor: 'pointer' }}
              />
              <img 
                src={picture4} 
                alt="TEAM ZEST Picture 4" 
                onClick={() => {
                  setSelectedPicture(picture4);
                  setIsPictureModalOpen(true);
                }}
                style={{ cursor: 'pointer' }}
              />
              <img 
                src={picture5} 
                alt="TEAM ZEST Picture 5" 
                onClick={() => {
                  setSelectedPicture(picture5);
                  setIsPictureModalOpen(true);
                }}
                style={{ cursor: 'pointer' }}
              />
              <img 
                src={picture6} 
                alt="TEAM ZEST Picture 6" 
                onClick={() => {
                  setSelectedPicture(picture6);
                  setIsPictureModalOpen(true);
                }}
                style={{ cursor: 'pointer' }}
              />
              <img 
                src={picture7} 
                alt="TEAM ZEST Picture 7" 
                onClick={() => {
                  setSelectedPicture(picture7);
                  setIsPictureModalOpen(true);
                }}
                style={{ cursor: 'pointer' }}
              />
              <img 
                src={picture8} 
                alt="TEAM ZEST Picture 8" 
                onClick={() => {
                  setSelectedPicture(picture8);
                  setIsPictureModalOpen(true);
                }}
                style={{ cursor: 'pointer' }}
              />
            </motion.div>
          </div>
        </motion.section>

        <AnimatePresence>
          {isPictureModalOpen && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPictureModalOpen(false)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={selectedPicture} alt="TEAM ZEST Picture" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.section
          id="program"
          className="program-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="program-content">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              프로그램
            </motion.h3>
            <ul className="program-list">
              <li>아크로바틱</li>
              <li>마샬아츠</li>
              <li>트릭킹</li>
              <li>무용테크닉</li>
            </ul>
            <p className="program-desc">
              팀 제스트는 전문적인 아크로바틱과 마샬아츠 트릭킹 교육을 제공합니다. 초보자부터 전문가까지, 각자의 수준에 맞는 맞춤형 교육으로 여러분의 꿈을 실현시켜 드립니다.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="location"
          className="location-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="location-title">찾아오시는 길</h3>
          <div className="location-content">
            <div className="location-map">
              <img src={mapImage} alt="오시는 길 지도" />
            </div>
            <div className="location-info">
              <div className="address-container">
                <div className="address-item">
                  <div className="address-content">
                    <div className="address-row">
                      <span className="address-label">도로명 주소</span>
                      <span>서울 강남구 강남대로 570 선양빌딩<br />팀제스트 아크로바틱 마샬아츠 트릭킹 B1층</span>
                    </div>
                    <div className="address-row">
                      <span className="address-label">지번 주소</span>
                      <span>서울 강남구 논현동 49</span>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                강남 논현역에서 7번출구로 나와 도보 30초로 직진하시면 오른쪽CU 편의점 건물 선양빌딩 지하1층 입니다.<br />
                강남 신사역에서 3번출구로 나와 도보 1분 직진하시면 왼쪽 CU편의점 건물 선양빌딩 지하1층 입니다.<br />
                신사역 버스정류장 바로 앞 맞은편 길 건너 CU편의점 건물 선양빌딩 지하1층 입니다.
              </p>
              <p className="location-parking">주차정보: 무료 주차 12대 가능합니다.</p>
              <a
                href="https://naver.me/5XJtvLsr"
                target="_blank"
                rel="noopener noreferrer"
                className="location-map-btn"
              >
                길찾기
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="contact-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-content">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              문의하기
            </motion.h3>
            <p className="contact-desc">팀 제스트와 함께 시작해보세요</p>
            <div className="contact-subsection">
              <div className="contact-phone-label">전화 번호</div>
              <div className="contact-phone-list">
                <a href="sms:01020349744" className="contact-phone-btn">010-2034-9744</a>
              </div>
            </div>
            <div className="contact-subsection contact-links-section">
              <div className="contact-phone-label">SNS & 블로그</div>
              <div className="contact-links">
                <a href="https://www.instagram.com/zest_tricking/" target="_blank" rel="noopener noreferrer" className="contact-link instagram">Instagram</a>
                <a href="https://www.facebook.com/Minseok0802/" target="_blank" rel="noopener noreferrer" className="contact-link facebook">Facebook</a>
                <a href="https://blog.naver.com/minseok0802" target="_blank" rel="noopener noreferrer" className="contact-link blog">Blog</a>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  )
}

export default App
