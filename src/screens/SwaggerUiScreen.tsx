import React from "react";
import { Container } from "@mui/joy";
import { config } from "../config";

const SwaggerUiScreen = () => {
  return (
    <Container>
      <div>
        <iframe
          src={`${config.api}${config.swaggerUrl}`}
          title="Swagger UI"
          style={{ width: "100%", height: "100vh", border: "none" }}
        />
      </div>
    </Container>
  );
};

export default SwaggerUiScreen;
