import React from 'react'
import { Row, Col, Modal } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
}))

const ConfirmationModal = props => { 

    const classes = useStyles()

    return (
        <Modal
            show={props.openModal}
            onHide={() => props.handleSubmitModalClose()}
            className="productModal"
            id="productModalDetail"
        >
          <Modal.Body className="text_align_center padding-none text_size_large">
              <div className="modalClose">
                <div className="card_top_pill_cross">
                  <CloseIcon className="closeIconSize" onClick={() => props.handleSubmitModalClose()} />
                </div>
              </div>
              <Row className={"fs-medium flex_jccenter margin-top-none margin-left-none margin-right-none margin-bottom-none padding-right--large padding-left--large padding-top--large padding-bottom--large margin-bottom--25px border-radius-small"} >
                <Col xs={12}>
                    <div className="text_size_large" style={{ fontWeight: "bold" }}>
                        Are you sure you want to submit?
                    </div>
                </Col>
                <Col xs={12} className="">
                    <div style={{ color: "red" }}>
                        You will no longer be able to make changes.
                    </div>
                </Col>
              <Row className="">
                <Col xs={6} className="padding-top--medium padding-bottom--verysmall">
                    <Button variant="contained" style={{ backgroundColor: "#DC2B2B", color: "rgb(255, 255, 255)" }}
                      onClick={() => props.handleSubmitModalClose()}
                    >
                        Cancel
                    </Button>
                  </Col>
                  <Col xs={6} className="padding-top--medium padding-bottom--verysmall">
                    <Button variant="contained" style={{ backgroundColor: "#3BA6FF", color: "rgb(255, 255, 255)" }}
                      onClick={() => props.handleSubmission()}
                    >
                        Confirm
                    </Button>
                  </Col>
                </Row>
             </Row>
            </Modal.Body>
        </Modal>
      )
}

export default ConfirmationModal