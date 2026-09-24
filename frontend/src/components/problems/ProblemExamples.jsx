import React from "react";

import ProblemSection from "./ProblemSection";
import CodeBlock from "./CodeBlock";

const ProblemExamples = ({ examples = [] }) => {
    if (!examples.length) {
        return null;
    }

    return (
        <ProblemSection title="Examples">

            <div className="space-y-5">

                {examples.map((example, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-[#1C2734] bg-[#0A1018] p-5"
                    >

                        <p className="mb-4 font-mono text-xs text-[#556275]">
                            example_{String(index + 1).padStart(2, "0")}
                        </p>


                        <div className="grid gap-4 md:grid-cols-2">

                            <CodeBlock
                                code={example.input}
                                language="input"
                            />

                            <CodeBlock
                                code={example.output}
                                language="output"
                            />

                        </div>


                        {example.explanation && (
                            <div className="mt-5 border-t border-[#1C2734] pt-5">

                                <p className="mb-2 font-mono text-xs text-[#556275]">
                                    explanation
                                </p>

                                <p className="whitespace-pre-line text-sm leading-7 text-[#AEB9C7]">
                                    {example.explanation}
                                </p>

                            </div>
                        )}

                    </div>
                ))}

            </div>

        </ProblemSection>
    );
};

export default ProblemExamples;