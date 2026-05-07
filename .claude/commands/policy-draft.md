# Policy Draft Command

Use this command to draft an enterprise risk-management or governance policy section.

## Usage
`/policy-draft [policy or scope]`

Examples:
- `/policy-draft enterprise risk management policy`
- `/policy-draft liquidity risk policy`
- `/policy-draft business continuity management policy`
- `/policy-draft AML / CFT policy`
- `/policy-draft third-party / outsourcing policy`

## What This Command Does
1. Identifies the applicable framework(s) and clauses for the requested policy.
2. Drafts the full policy section following a standard structure.
3. Inserts cross-references to risk register entries, KRIs, and supporting procedures.
4. Saves the draft to `policies/`.

## Process

### 1. Framework Selection
Pick the primary framework(s) the policy must align to. Examples:
- **ERM**: ISO 31000:2018 + COSO ERM 2017
- **Liquidity**: BCBS 144 (Principles for Sound Liquidity Risk Management) + local prudential guideline (e.g. CBK PG/2013)
- **BCM**: ISO 22301:2019
- **AML/CFT**: FATF 40 Recommendations + national POCAMLA / CFT Act
- **Third party / outsourcing**: applicable supervisory guidance (CBK PG, EBA outsourcing guidelines)
- **Information security**: ISO 27001:2022, NIST CSF 2.0

### 2. Standard Policy Structure
Every drafted policy follows this skeleton:

1. **Purpose**
2. **Scope** (entities, functions, processes covered)
3. **Definitions**
4. **Roles & Responsibilities**
   - Board / Board Risk Committee
   - CEO / Executive Committee
   - Risk owner
   - Internal audit (third line)
5. **Risk Appetite & Tolerance**
6. **Governance Structure** (committees, reporting lines, escalation)
7. **Policy Statements** (the substantive "shall" clauses)
8. **Key Processes & Controls**
9. **Key Risk Indicators & Reporting**
10. **Training & Awareness**
11. **Policy Exceptions** (approval authority, documentation)
12. **Monitoring & Review** (review cadence, owner)
13. **Related Documents**
14. **Approval & Version Control**

### 3. Drafting Conventions
- Use "shall" for binding obligations, "should" for guidance, "may" for permissive language. Do not mix.
- Each "shall" clause must have a clear accountable role.
- Where a clause maps to a regulatory requirement, cite the source (e.g. "(CBK PG/2013, §3.4)") inline.
- Avoid restating regulation verbatim — rephrase with the firm's specific obligations.
- Numbered clauses for traceability (e.g. §7.2.1).

### 4. Cross-references
- Link to entries in the risk register (`risk-registers/`).
- Link to KRI specifications (`kri-specs/`).
- Reference supporting procedures, work instructions, and forms by name.

### 5. Validation
Before finalising, run the **compliance-checker** agent to confirm:
- All applicable regulatory clauses are addressed.
- Roles map cleanly to a three-lines-of-defence model.
- Risk appetite is quantified, not just qualitative.
- Exceptions process exists and has named approval authority.

## Output Format

Saved to `policies/policy-[scope-slug]-[YYYY-MM-DD].md`.

Include at the top:
```
**Policy title**:
**Owner**:
**Approved by**:
**Effective date**:
**Next review date**:
**Version**:
**Frameworks referenced**:
```

Include at the bottom a **change log** table:
```
| Version | Date | Author | Summary of change | Approved by |
```

## Integration with Agents
- **risk-analyst** — pressure-tests risk appetite quantification and control design.
- **compliance-checker** — verifies framework alignment and regulatory clause coverage.

## Next Steps
1. Route the draft through the policy approval workflow (typically risk owner → ExCo → Board Risk Committee → Board).
2. Ensure procedures and work instructions referenced by the policy actually exist; if not, draft them.
3. Update the document register and policy library index.
4. Schedule the next periodic review.
