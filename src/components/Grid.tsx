'use client'

/* eslint-disable react/no-array-index-key */
type DayName = 'ma' | 'di' | 'wo' | 'do' | 'vr' | 'za' | 'zo'

const quarters = Array(4).fill('')
const hours = Array(24).fill('')
const days: DayName[] = ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo']

const Quarter = ({ day, hour, minutes }: { day: DayName; hour: number; minutes: number }) => (
  <div>
    <button
      onClick={() => {
        console.log(day, hour, minutes)
      }}
      type="button"
    >
      {hour}:{minutes.toString().length === 1 ? '0' : ''}
      {minutes}
    </button>
  </div>
)
const Hour = ({ day, hour }: { day: DayName; hour: number }) => (
  <div>
    {quarters.map((_, i) => (
      <Quarter
        day={day}
        hour={hour}
        minutes={i * 15}
        key={`${day}_${hour}_${i}`}
      />
    ))}
  </div>
)

const Day = ({ day }: { day: DayName }) => (
  <div className="flex flex-col flex-grow">
    <div>{day}</div>
    {hours.map((_, i) => {
      return (
        <Hour
          day={day}
          hour={i + 1}
          key={`${day}_${i}`}
        />
      )
    })}
  </div>
)

export default () => {
  return (
    <div className="flex flex-row flex-nowrap">
      {days.map((day) => (
        <Day
          day={day}
          key={day}
        />
      ))}
    </div>
  )
}
