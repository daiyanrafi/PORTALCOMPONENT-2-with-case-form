import React, { useState } from "react";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardStatus,
  DocumentCardTitle,
  IDocumentCardActivityPerson,
} from "@fluentui/react/lib/DocumentCard";
import {
  ContextualMenu,
  IDragOptions,
  IIconProps,
  IconButton,
  Modal,
} from "@fluentui/react";

interface Cases {
  label: string;
  onClickHref: string;
  caseID: string;
  caseTitle: string;
  caseStatus: string;
  personas: IDocumentCardActivityPerson[];
  fileAttachment: string;
  createdDate: string;
  // add other properties as needed
}

interface CaseListProps {
  documentCards: Cases[];
}
interface CaseDetailsProps {
  caseDetails: Cases;
}

const getCaseStatus = (caseStatus: string): React.ReactNode => {
  switch (caseStatus?.toLowerCase()) {
    case "in progress":
      return <div className="case-inprogress">In Progress</div>;
    case "closed":
      return <div className="case-closed">Closed</div>;

    default:
      return <div className="case-open">Open</div>;
  }
};

const cancelIcon: IIconProps = { iconName: "Cancel" };

const CaseDetails = ({ caseDetails }: CaseDetailsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hideModal = () => setIsModalOpen(false);

  const [isDraggable] = useState(false);

  const [keepInBounds] = useState(false);

  // Normally the drag options would be in a constant, but here the toggle can modify keepInBounds
  const dragOptions = React.useMemo(
    (): IDragOptions => ({
      moveMenuItemText: "Move",
      closeMenuItemText: "Close",
      menu: ContextualMenu,
      keepInBounds,
      dragHandleSelector: ".ms-Modal-scrollableContent > div:first-child",
    }),
    [keepInBounds]
  );

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onDismiss={hideModal}
        isBlocking={false}
        dragOptions={isDraggable ? dragOptions : undefined}
        styles={{ main: { zIndex: 1000 } }}
      >
        <div>
          <IconButton
            iconProps={cancelIcon}
            ariaLabel="Close popup modal"
            onClick={hideModal}
          />
        </div>
        <div>
          <h2>{caseDetails.caseTitle}</h2>
          <p>Case ID: {caseDetails.caseID}</p>
          <p>Status: {caseDetails.caseStatus}</p>
        </div>
      </Modal>
    </div>
  );
};

const MemberCase = ({ documentCards }: CaseListProps) => {
  const [selectedCase, setSelectedCase] = useState<Cases | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCase(documentCards[index]);
  };

  return (
    <div className="cardGroup">
      {documentCards.map((card, index) => (
        <DocumentCard
          key={index}
          aria-label={card.label}
          onClick={() => handleCardClick(index)}
          className="caseContainer"
        >
          <div className="case-container">
            <DocumentCardTitle title={card.caseID} />
            {getCaseStatus(card.caseStatus)}
          </div>
          <div className="conversationTile">
            <DocumentCardTitle title={card.caseTitle} showAsSecondaryTitle />
            <DocumentCardStatus
              statusIcon="attach"
              status={`${card.fileAttachment} Attachments`}
            />
          </div>
          <DocumentCardActivity
            activity={`Created ${card.createdDate} `}
            people={card.personas}
          />
        </DocumentCard>
      ))}
      {selectedCase && <CaseDetails caseDetails={selectedCase} />}
    </div>
  );
};

export default MemberCase;
