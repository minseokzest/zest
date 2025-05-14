import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><strong>ZEST</strong></li>
          </ul>
          <ul>
            <li><a href="#about">소개</a></li>
            <li><a href="#programs">프로그램</a></li>
            <li><a href="#schedule">일정</a></li>
            <li><a href="#contact">문의하기</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="grid">
          <article>
            <h2>팀 ZEST</h2>
            <p>
              하늘을 바라만 보고는 것이 아닌<br />
              하늘을 날아 보는 것은 어떠세요?<br />
              팀 제스트가 실현 시켜 드리겠습니다.
            </p>
            <button>시작하기</button>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
