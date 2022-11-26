import { BehaviorSubject } from "rxjs";
import axios from "axios";
import { showSnackbar } from "../Store/Snackbar/action";
import {
  clearAccountDeatils,
  saveAccountDetails,
} from "../Store/AccounDetail/action";
import { saveCustomerDetails } from "../Store/CustomerDetails/action";

export class DataService {
  static serviceBehaviour;
  static ServiceInst = new BehaviorSubject({
    msgType: "Dashboard",
    payLoad: "",
  });

  static SetServiceBehaviour(behaviourOpts) {
    DataService.serviceBehaviour = behaviourOpts;
  }

  static initializeSubscriber(nextHandler, errorHandler) {
    DataService.resetSubscriber();
    DataService.ServiceInst.subscribe(nextHandler, errorHandler);
  }

  static resetSubscriber() {
    if (!DataService.ServiceInst.isStopped) {
      DataService.ServiceInst.complete();
    }
    DataService.ServiceInst = new BehaviorSubject({
      msgType: "Dashboard",
      payLoad: "",
    });
  }

  static login = async (params) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/v1/login`, {
        email: params.username,
        password: params.password,
      })
      .then((resp) => {
        if (resp.data.status) {
          DataService.serviceBehaviour &&
            DataService.serviceBehaviour.AppStore.dispatch(
              saveAccountDetails({
                name: resp.data.data.name,
              })
            );
          localStorage.setItem("user", resp.data.data.name);
        } else {
          DataService.serviceBehaviour &&
            DataService.serviceBehaviour.AppStore.dispatch(
              showSnackbar({
                open: true,
                autoHideDuration: 10000,
                severity: "error",
                message: resp.data.message,
              })
            );
        }
      });
  };

  static clearSession = () => {
    DataService.serviceBehaviour &&
      DataService.serviceBehaviour.AppStore.dispatch(clearAccountDeatils());
  };

  static logout = () => {
    localStorage.clear();
    DataService.clearSession();
  };

  static getAllCustomers = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/v1/customer`)
      .then((resp) => {
        if (resp.data.status) {
          DataService.serviceBehaviour &&
            DataService.serviceBehaviour.AppStore.dispatch(
              saveCustomerDetails(resp.data.data)
            );
        } else {
          DataService.serviceBehaviour &&
            DataService.serviceBehaviour.AppStore.dispatch(
              showSnackbar({
                open: true,
                autoHideDuration: 10000,
                severity: "error",
                message: resp.data.message,
              })
            );
        }
      });
  };
}
