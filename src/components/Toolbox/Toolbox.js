import React from "react";
import {
  Box,
  Typography,
  Button as MuButton,
  makeStyles,
} from "@material-ui/core";
import {
  Banner,
  Button,
  Card,
  Divider,
  Flexbox,
  Image,
  Slideshow,
  Text,
} from "../user";
import { Element, useEditor } from "@craftjs/core";

const useStyles = makeStyles({
  heading: {
    padding: "14px 0",
    fontSize: 27,
    fontWeight: 700,
  },
  button: {
    width: "100%",
    margin: "9px 0",
    color: "#ffffff",
    backgroundColor: "#296e3b",
    "&:hover": {
      backgroundColor: "#3ab059",
    },
  },
  deleteBtn: {
    padding: "5px 39px",
    color: "#470f1b",
    borderColor: "#470f1b",
    fontSize: 21,
  },
  fieldset: {
    width: "100%",
    padding: "4px 15px",
  },
});

export default function Toolbox() {
  const { connectors, actions, selected } = useEditor((state, query) => {
    const currentNodeId = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" padding="4px 14px" bgcolor="#ccc">
      <Box
        display="flex"
        width="60%"
        flexDirection="column"
        alignItems="center"
        padding="23px 12px"
        borderRight="1px solid gray"
      >
        <Typography component="h3" className={classes.heading}>
          Drag to add
        </Typography>
        <MuButton
          ref={(ref) =>
            connectors.create(ref, <Element is={Banner} src="/src" canvas />)
          }
          className={classes.button}
          variant="contained"
        >
          Banner
        </MuButton>
        <MuButton
          ref={(ref) =>
            connectors.create(
              ref,
              <Element is={Flexbox} flexDirection="column" padding={5} canvas />
            )
          }
          className={classes.button}
          variant="contained"
        >
          Container
        </MuButton>
        <MuButton
          ref={(ref) => connectors.create(ref, <Button value="Text" />)}
          className={classes.button}
          variant="contained"
        >
          Button
        </MuButton>
        <MuButton
          ref={(ref) =>
            connectors.create(
              ref,
              <Card imageSrc="/src" alt="Image" text="Text" />
            )
          }
          className={classes.button}
          variant="contained"
        >
          Card
        </MuButton>
        <MuButton
          ref={(ref) => connectors.create(ref, <Divider />)}
          className={classes.button}
          variant="contained"
        >
          Divider
        </MuButton>
        <MuButton
          ref={(ref) =>
            connectors.create(ref, <Image src="/src" alt="Image" />)
          }
          className={classes.button}
          variant="contained"
        >
          Image
        </MuButton>
        <MuButton
          ref={(ref) => connectors.create(ref, <Slideshow images={["/src"]} />)}
          className={classes.button}
          variant="contained"
        >
          Slideshow
        </MuButton>
        <MuButton
          ref={(ref) => connectors.create(ref, <Text value="Text..." />)}
          className={classes.button}
          variant="contained"
        >
          Text
        </MuButton>
      </Box>

      <Box
        display="flex"
        width="40%"
        flexDirection="column"
        padding="23px 12px"
        height="554px"
      >
        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          overflow="auto"
        >
          {selected &&
            selected.settings &&
            React.createElement(selected.settings)}
        </Box>

        <Box display="flex" justifyContent="center" minHeight="50px">
          <MuButton
            className={classes.deleteBtn}
            variant="outlined"
            disabled={!(selected && selected.isDeletable)}
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </MuButton>
        </Box>
      </Box>
    </Box>
  );
}
