import { FC } from 'react'

const Timeline: FC = () => {
  return (
    <div className="relative box-border w-full max-w-3xl py-24 px-12 before:absolute before:top-0 before:left-[calc(33%_+_15px)] before:bottom-0 before:w-1 before:bg-secondary before:content-[''] after:clear-both after:table after:content-none">
      <div className="relative clear-both text-left">
        <div className="relative float-left mb-2 w-[33%] pr-8 text-right before:absolute before:top-[20%] before:right-[-4.5px] before:z-[99] before:h-2 before:w-2 before:rounded-full before:bg-background before:ring-4 before:ring-primary before:content-['']">
          <h3>2014 - Present</h3>
          <p>Title, Company</p>
        </div>
        <div className="float-right mb-12 w-[66%] pl-8">
          <p className="font-normal leading-6">
            Voluptatibus veniam ea reprehenderit atque reiciendis non laborum
            adipisci ipsa pariatur omnis.
          </p>
          <ul>
            <li>Rerum sit libero possimus amet excepturi</li>
            <li>
              Exercitationem enim dolores sunt praesentium dolorum praesentium
            </li>
            <li>
              Modi aut dolores dignissimos sequi sit ut aliquid molestias
              deserunt illo
            </li>
          </ul>
        </div>
      </div>
      <div className="relative clear-both text-left">
        <div className="relative float-left mb-2 w-[33%] pr-8 text-right before:absolute before:top-[20%] before:right-[-4.5px] before:z-[99] before:h-2 before:w-2 before:rounded-full before:bg-background before:ring-4 before:ring-primary before:content-['']">
          <h3>2010 - Present</h3>
          <p>Title, Company</p>
        </div>
        <div className="float-right mb-12 w-[66%] pl-8">
          <p className="font-normal leading-6">
            Voluptatibus veniam ea reprehenderit atque reiciendis non laborum
            adipisci ipsa pariatur omnis.
          </p>
          <ul>
            <li>Rerum sit libero possimus amet excepturi</li>
            <li>
              Exercitationem enim dolores sunt praesentium dolorum praesentium
            </li>
            <li>
              Modi aut dolores dignissimos sequi sit ut aliquid molestias
              deserunt illo
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Timeline
