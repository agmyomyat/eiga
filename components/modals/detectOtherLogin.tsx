import { Modal } from "@material-ui/core";
import React, { Dispatch, SetStateAction } from "react";

type ModalProp={open:boolean,handleClose:Dispatch<SetStateAction<boolean>>}
export default function DetectOtherLogin<T extends ModalProp>({open,handleClose}:T) {
	return (
		<div>
			<Modal
  		open={open}
  		onClose={()=>handleClose(false)}
  		aria-labelledby="simple-modal-title"
  		aria-describedby="simple-modal-description"
		>
		<h1>We detect Another Login Do Not Share Your Account</h1>
		</Modal>		
		</div>
	)
}

