import CircularProgress from "@material-ui/core/CircularProgress";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import { authInitialProps } from "../lib/auth";
import Router from "next/router";

const Index = ({ classes, auth }) => (
	<main className={classes.root}>
		{auth.user && auth.user._id ? (
			//Auth user Page
			<div> Auth User Page </div>
		) : (
			<Grid
				justify="center"
				alignItems="center"
				direction="row"
				container
				className={classes.heroContent}
			>
				<Typography component="h1" variant="h2" align="center" gutterBottom>
					Reach Out
				</Typography>
				<Typography
					variant="h6"
					align="center"
					color="textSecondary"
					component="p"
				>
					This is a much better Social Network Powered by Next JS
				</Typography>
				<Button
					className={classes.fabButton}
					variant="extendedFab"
					color="primary"
					onClick={() => Router.push("/signup")}
				>
					Join Us
				</Button>
			</Grid>
		)}
	</main>
);

const styles = (theme) => ({
	root: {
		paddingTop: theme.spacing.unit * 10,
		paddingLeft: theme.spacing.unit * 5,
		[theme.breakpoints.down("sm")]: {
			paddingRight: theme.spacing.unit * 5
		}
	},
	progressContainer: {
		height: "80vh"
	},
	progress: {
		margin: theme.spacing.unit * 2,
		color: theme.palette.secondary.light
	},
	drawerContainer: {
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	drawer: {
		width: 350
	},
	drawerPaper: {
		marginTop: 70,
		width: 350
	},
	fabButton: {
		margin: theme.spacing.unit * 3
	},
	heroContent: {
		maxWidth: 600,
		paddingTop: theme.spacing.unit * 8,
		paddingBottom: theme.spacing.unit * 6,
		margin: "0 auto"
	}
});

Index.getInitialProps = authInitialProps();

export default withStyles(styles)(Index);
