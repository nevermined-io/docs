---
sidebar_position: 1
description: Factoring dynamic outcomes & cost mettering
---

# Cost Metering

AI agents resemble a platform from a technical point of view, with an internal set of tools or component services that can be employed to service requests. These requests are dynamic in nature. Which tools are invoked when provisioning a response is dependent on the complexity of the input request. Depending on the sophistication of the agent, each request will be decomposed and routed through the agent system via the optimal response path.

This is unlike most contemporary platforms, which take relatively static inputs (i.e. highly formatted queries) that limit the complexity of the interface, and respond based on predefined tool selections. In the case of an AI agent, the tools invoked to respond to a request can have associated costs that differ by orders of magnitude. Variation in cost is explained by variation in computational load and inferencing requirements. Each tool or component service thus has its own metering & cost function. Accounting for the dynamic inputs, the variable response, and the associated variable cost is non-trivial.

While fixed pricing might be feasible in the face of imperfect competition or where a monopoly exists, presence of competition compresses margins. In competitive markets, where services can become commoditized or there exist a large number of substitutes, pricing is argued to trend to cost, and reach equilibrium at some acceptable margin above this level. We need to factor usage & cost across the range of invoked services. An optimal pricing solution needs to integrate across all internal cost functions, and translate metered usage into a settlement charge via a system of unit accounting.


