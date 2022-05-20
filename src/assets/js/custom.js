function findNodeFromWallet(data, wallet){
    return jsonPath(data, "$.fluxNodes[?(@.payment_address == '" + wallet + "')]")
}