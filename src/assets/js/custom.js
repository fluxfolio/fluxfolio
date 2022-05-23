function findNodeFromWallet(data, wallet){
    return jsonPath(data, "$.fluxNodes[?(@.payment_address == '" + wallet + "')]")
}

function findCoinDataFromProfileActive(profile, coin){
    return jsonPath(profile, "$.coin[?(@.name == '" + coin + "')]")
}