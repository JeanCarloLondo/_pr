export default function Page() {
  return (
    <div className="gothic-container">
      <div className="greetings">
        <span>L</span>
        <span>E</span>
        <span>M</span>
        <span>I</span>
        <span>!</span>
      </div>
      <div className="description">
        <span>Para mi hermosa y talentosa mejor amiga♥</span>
      </div>
      <div className="apology">
        <span>Perdón por no hablarte estos días...</span>
        <br />
        <span>Te amo Lemi ♥</span>
      </div>

      {/* Gothic bats flying across screen */}
      <div className="bats">
        <div className="bat bat-1">🦇</div>
        <div className="bat bat-2">🦇</div>
        <div className="bat bat-3">🦇</div>
        <div className="bat bat-4">🦇</div>
        <div className="bat bat-5">🦇</div>
      </div>

      {/* Gothic button */}
      <div className="button-container">
        <a href="/flores" className="gothic-button">
          ¡Presiona para ver tu regalo :333! 🌹
          <div className="gothic-stars">
           
          </div>
        </a>
      </div>
    </div>
  )
}