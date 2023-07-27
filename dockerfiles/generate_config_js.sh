

if [[ -z "${API_URL}" ]]; then
  API_URL_VALUE=undefined
else
  API_URL_VALUE="${API_URL}"
fi


cat <<EOF
window.REACT_APP_API_URL="$API_URL_VALUE";
EOF
