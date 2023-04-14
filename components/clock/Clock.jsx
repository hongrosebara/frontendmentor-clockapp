import s from "./Clock.module.scss"
import { Sun } from "@/components/icons"
import { Button } from "@/components/ui"
import { useState, useRef } from "react"
import { ArrowUp, ArrowDown } from "@/components/icons"

const Clock = () => {
  const [isActive, setIsActive] = useState(false)
  const topBox = useRef()
  const quoteBox = useRef()
  const bottomBox = useRef()

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current)
    topBox.current.classList.toggle("min-h-screen")
    topBox.current.classList.toggle("half-screen")
    quoteBox.current.classList.toggle("hidden")
    bottomBox.current.classList.toggle("hidden")
  }

  return (
    <section className={s["clock-container"]}>
      <div className="top-box">
        <div className="wrapper top-box__inner min-h-screen" ref={topBox}>
          <div className={s["clock__quote-box"]} ref={quoteBox}>
            <div className={s["clock__quote"]}>
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </div>

            <div className={s["clock__author"]}>Ada Lovelace</div>
          </div>
          <div className={s["clock__time-box"]}>
            <div className={s["clock__greeting-box"]}>
              <Sun />
              <div className={s.clock__greeting}>
                Good morning, it's currently
              </div>
            </div>
            <div className={s.clock__time}>
              11:37 <span>BST</span>
            </div>
            <div className={s.clock__info}>
              <div>IN LONDON, UK</div> {ArrowDown}
              <Button
                content={isActive ? "Less" : "More"}
                svg={isActive ? <ArrowDown /> : <ArrowUp />}
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-box hidden" ref={bottomBox}>
        <div className="wrapper half-screen">
          <div className={s["timezone-box"]}>
            <div className={s["timezone-left"]}>
              <div>
                <h2>Current Timezone</h2>
                <p>Europe/London</p>
              </div>
              <div>
                <h2>Day of The Year</h2>
                <p>295</p>
              </div>
            </div>
            <div className={s["timezone-right"]}>
              <div className="pl-20">
                <h2>Day of The Week</h2>
                <p>5</p>
              </div>
              <div className="pl-20">
                <h2>Week Number</h2>
                <p>42</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Clock
