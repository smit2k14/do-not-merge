() => {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const type = request.type;
    if (type == "GithubPR") {
      const merge = document.querySelector(
        "merge-box-button btn-group-merge rounded-left-2 btn btn-primary BtnGroup-item js-details-target hx_create-pr-button"
      );
      if (merge) {
        merge.onclick = () => {
          alert("blah");
        };
      }
    }
  });
};
