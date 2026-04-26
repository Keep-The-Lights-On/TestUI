/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface WaitlistModalProps extends ModalProps {
  onSuccess: () => void;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "primary" | "secondary";
}

export interface SubmissionFlowProps {
  onSuccess: () => void;
}
