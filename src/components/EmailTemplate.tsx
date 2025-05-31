import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 3rem",
      textAlign: "center",
      fontFamily: "sans-serif",
    }}
  >
    <p style={{ fontSize: "22px", color: "#1C1917", margin: "0.5rem 0" }}>
      Thank you for joining Kleo.
    </p>
    <p
      style={{
        fontSize: "12px",
        color: "#302d2b",
        fontWeight: 300,
        margin: "0.5rem 0",
      }}
    >
      Access is limited. You’ve claimed your spot.
    </p>
    <div
      style={{
        marginTop: "2rem",
        marginBottom: "0.5rem",
        width: "100%",
        height: "1px",
        backgroundColor: "#757473",
      }}
    />
    <p
      style={{
        fontSize: "12px",
        maxWidth: "22rem",
        padding: "0 1rem",
        wordWrap: "break-word",
        margin: "0.5rem 0",
        color: "424140",
      }}
    >
      We'll notify you when it’s your time to step inside. Until then, consider
      this a whisper from the future.
    </p>

    {/* This keeps the first name for internal use, invisible */}
    <div style={{ display: "none" }}>{firstName}</div>
  </div>
);
