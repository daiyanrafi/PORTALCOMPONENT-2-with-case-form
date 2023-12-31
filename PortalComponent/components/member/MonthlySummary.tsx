import React = require("react");
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  DocumentCard,
  DocumentCardDetails,
  IDocumentCardStyles,
} from "@fluentui/react/lib/DocumentCard";

import {
  IPersonaSharedProps,
  Persona,
  PersonaSize,
} from "@fluentui/react/lib/Persona";

const cardStyles: IDocumentCardStyles = {
  root: {
    display: "inline-block",
    marginRight: 20,
    marginBottom: 20,
    width: 320,
  },
};

const examplePersona: IPersonaSharedProps = {
  imageInitials: "AL",
};

//   const examplePersona: IPersonaSharedProps [] = [
//     { imageInitials: 'AL'},{ imageInitials: 'AL'},{ imageInitials: 'AL'}];

const documentCards = [
  {
    label: "",
    onClickHref: "",
    title: "2021/02/01223",
    subTitle: "Frankie Hartford",
    personas: [
      { ...examplePersona, size: PersonaSize.size32 },
      { ...examplePersona, size: PersonaSize.size32 },
      { ...examplePersona, size: PersonaSize.size32 },
    ],
    actionTitle: "Next action",
    actionText: "Awaiting me \nin 3 days",
    stageTitle: "Stage",
    stageText: "Conciliation",
    ageTitle: "Age",
    ageText: "24 days",
    updatedTitle: "Last updated",
    updatedText: "26/02/2020\n4 days ago",
    deadlineText: "Upcoming deadline",
    deadlineDate: "19 Feb",
    cardTitle: "Consumer is awaiting your reply. Due in two days.",
  },

  // Add more objects for additional Document Cards
];

function MonthlySummary() {
  return (
    <div className="cardGroup">
      {documentCards.map((card, index) => (
        <DocumentCard
          key={index}
          aria-label={card.label}
          onClickHref={card.onClickHref}
          styles={cardStyles}
        >
          <div className="Monthly-card-body">
            <div className="row g-0">
              <div className="col-md-7">
                <b>{card.title}</b>
                <p>{card.subTitle}</p>
                <div className="row">
                  <div className="CardActivity">
                    {card.personas.map((persona, index) => (
                      <Persona key={index} {...persona} />
                    ))}
                  </div>
                </div>
                <h6 className="card-title">{card.actionTitle}</h6>
                <p className="card-text">{card.actionText}</p>
              </div>
              <div className="col-md-5">
                <div className="text">
                  <h6 className="card-title">{card.stageTitle}</h6>
                  <p className="card-text">{card.stageText}</p>
                  <h6 className="card-title">{card.ageTitle}</h6>
                  <p className="card-text">{card.ageText}</p>
                  <h6 className="card-title">{card.updatedTitle}</h6>
                  <p className="card-text">{card.updatedText}</p>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
          <DocumentCardDetails className="cardDetails">
            <div className="Monthly-card-details">
              <div className="row g-0">
                <div className="col-md-7">
                  <p>{card.deadlineText}</p>
                </div>
                <div className="col-md-5">
                  <div className="text-end">
                    <p className="card-title">{card.deadlineDate}</p>
                  </div>
                </div>
              </div>
            </div>
            <h6 className="cardTitle">{card.cardTitle}</h6>
          </DocumentCardDetails>
        </DocumentCard>
      ))}
    </div>
  );
}

export default MonthlySummary;
